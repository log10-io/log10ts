"use strict";
// log10.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log10Wrapper = void 0;
const axios_1 = __importDefault(require("axios"));
const client_bedrock_runtime_1 = require("@aws-sdk/client-bedrock-runtime");
const hooks_1 = require("../hooks/hooks");
function isStreamable(obj) {
    return (obj &&
        typeof obj.iterator === "function" &&
        obj.iterator.constructor.name === "AsyncGeneratorFunction" &&
        obj.controller instanceof AbortController);
}
class Log10Wrapper {
    constructor(options = {}, tags) {
        this.tags = [];
        const opt = options;
        let hooks;
        if (typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof hooks_1.SDKHooks) {
            hooks = opt.hooks;
        }
        else {
            hooks = new hooks_1.SDKHooks();
        }
        this.options$ = { ...options, hooks };
        this.tags = tags || [];
        void this.options$;
    }
    async logCompletion(completion) {
        try {
            return axios_1.default.post(`${this.options$.serverURL}/api/v1/completions`, {
                ...completion,
                organization_id: this.options$.xLog10Organization,
                kind: "chat",
                status: "finished",
                tags: this.tags || [],
            }, {
                headers: {
                    "x-log10-token": typeof this.options$.log10Token === "function"
                        ? await this.options$.log10Token()
                        : this.options$.log10Token,
                    "x-log10-organization": this.options$.xLog10Organization,
                    "Content-Type": "application/json",
                },
            });
        }
        catch (error) {
            console.error("Error logging completion:", error);
        }
    }
    async *wrappedResponse(response, request) {
        try {
            let lastChunk = { choices: [{ delta: { content: "" } }] };
            let buffer = "";
            for await (const chunk of response.iterator()) {
                lastChunk = chunk;
                buffer += chunk.choices[0].delta.content || "";
                yield chunk;
            }
            const finalResponse = {
                ...lastChunk,
                system_fingerprint: "",
                object: "chat.completion",
                created: 0
            };
            finalResponse.choices[0].message = { content: buffer, role: "assistant" };
            delete finalResponse.choices[0].delta;
            this.logCompletion({
                request,
                response: { ...finalResponse, system_fingerprint: "" },
            });
        }
        catch (error) {
            console.error("Error logging completion:", error);
        }
    }
    wrap(client) {
        const ref = client.chat.completions.create;
        client.chat.completions.create = async (...args) => {
            const response = await ref.call(client.chat.completions, ...args);
            if (isStreamable(response)) {
                // Start consuming the AsyncGenerator in a background async function
                return this.wrappedResponse(response, args[0]);
            }
            this.logCompletion({
                request: args[0],
                response: { ...response, system_fingerprint: "" },
            });
            return response;
        };
    }
    async *wrappedBedrockResponse(response, request) {
        var _a, _b;
        try {
            let buffer = "";
            for await (const chunk of response.body) {
                const decoded = new TextDecoder().decode((_a = chunk.chunk) === null || _a === void 0 ? void 0 : _a.bytes);
                const parsed = JSON.parse(decoded);
                if (parsed.type === 'content_block_delta') {
                    buffer += ((_b = parsed.delta) === null || _b === void 0 ? void 0 : _b.text) || '';
                }
                yield chunk;
            }
            // Transform the request/response for logging
            const requestBody = JSON.parse(typeof request.input.body === 'string'
                ? request.input.body
                : new TextDecoder().decode(request.input.body instanceof Uint8Array
                    ? request.input.body
                    : new Uint8Array(request.input.body)));
            const transformedRequest = {
                model: request.input.modelId,
                messages: requestBody.messages || [{
                        role: "user",
                        content: requestBody.prompt
                    }],
                max_tokens: requestBody.max_tokens,
                temperature: requestBody.temperature,
            };
            if (requestBody.system) {
                transformedRequest.messages.unshift({
                    role: "system",
                    content: requestBody.system
                });
            }
            const transformedResponse = {
                id: `stream-${Date.now()}`,
                object: "chat.completion",
                created: Date.now(),
                model: request.input.modelId,
                choices: [{
                        message: {
                            role: "assistant",
                            content: buffer
                        },
                        logprobs: null,
                        index: 0,
                        finish_reason: "stop"
                    }],
                usage: {
                    prompt_tokens: -1,
                    completion_tokens: -1,
                    total_tokens: -1
                }
            };
            this.logCompletion({
                request: transformedRequest,
                response: transformedResponse,
            });
        }
        catch (error) {
            console.error("Error in wrappedBedrockResponse:", error);
        }
    }
    wrapBedrock(client) {
        const originalSend = client.send;
        client.send = async (command, ...args) => {
            var _a, _b;
            if (!(command instanceof client_bedrock_runtime_1.InvokeModelCommand) &&
                !(command instanceof client_bedrock_runtime_1.InvokeModelWithResponseStreamCommand)) {
                return originalSend.call(client, command, ...args);
            }
            const response = await originalSend.call(client, command, ...args);
            // Handle streaming response
            if (command instanceof client_bedrock_runtime_1.InvokeModelWithResponseStreamCommand) {
                return {
                    ...response,
                    body: this.wrappedBedrockResponse(response, command)
                };
            }
            // Handle non-streaming response
            const requestBody = JSON.parse(typeof command.input.body === 'string'
                ? command.input.body
                : new TextDecoder().decode(command.input.body instanceof Uint8Array
                    ? command.input.body
                    : new Uint8Array(command.input.body)));
            const responseBody = JSON.parse(new TextDecoder().decode(response.body));
            // Transform Bedrock format to OpenAI-like format for logging
            const transformedRequest = {
                model: command.input.modelId,
                messages: requestBody.messages || [{
                        role: "user",
                        content: requestBody.prompt
                    }],
                max_tokens: requestBody.max_tokens,
                temperature: requestBody.temperature,
            };
            if (requestBody.system) {
                transformedRequest.messages.unshift({
                    role: "system",
                    content: requestBody.system
                });
            }
            const transformedResponse = {
                id: response.$metadata.requestId,
                object: "chat.completion",
                created: Date.now(),
                model: command.input.modelId,
                choices: [{
                        message: {
                            role: "assistant",
                            content: ((_b = (_a = responseBody.content) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text) || responseBody.completion
                        },
                        logprobs: null,
                        index: 0,
                        finish_reason: "stop"
                    }],
                usage: {
                    prompt_tokens: -1,
                    completion_tokens: -1,
                    total_tokens: -1
                }
            };
            this.logCompletion({
                request: transformedRequest,
                response: transformedResponse,
            });
            return response;
        };
    }
}
exports.Log10Wrapper = Log10Wrapper;
//# sourceMappingURL=index.js.map
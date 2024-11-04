"use strict";
// log10.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log10Wrapper = void 0;
const axios_1 = __importDefault(require("axios"));
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
}
exports.Log10Wrapper = Log10Wrapper;
//# sourceMappingURL=index.js.map
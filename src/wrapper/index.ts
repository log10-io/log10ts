// log10.ts

import axios from "axios";
import {
  InvokeModelCommand,
  InvokeModelWithResponseStreamCommand,
} from "@aws-sdk/client-bedrock-runtime";

import { SDKOptions } from "..";
import { SDKHooks } from "../hooks/hooks";

function isStreamable(
  obj: any
): obj is { iterator: AsyncGeneratorFunction; controller: AbortController } {
  return (
    obj &&
    typeof obj.iterator === "function" &&
    obj.iterator.constructor.name === "AsyncGeneratorFunction" &&
    obj.controller instanceof AbortController
  );
}
class Log10Wrapper {
  private readonly options$: SDKOptions & { hooks?: SDKHooks };
  private readonly tags: string[] = [];

  constructor(options: SDKOptions = {}, tags?: string[]) {
    const opt = options as unknown;
    let hooks: SDKHooks;
    if (
      typeof opt === "object" &&
      opt != null &&
      "hooks" in opt &&
      opt.hooks instanceof SDKHooks
    ) {
      hooks = opt.hooks;
    } else {
      hooks = new SDKHooks();
    }

    this.options$ = { ...options, hooks };
    this.tags = tags || [];
    void this.options$;
  }

  // Image types need to be transformed
  //
  // Bedrock looks like this:
  // messages: [
  // {
  //   role: "user",
  //   content: [
  //     {
  //       type: "image",
  //       source: {
  //         type: "base64",
  //         media_type: "image/png",
  //         data: image_data
  //       }
  //     }
  //   ]
  // }
  // ]
  //
  // OpenAI looks like this:
  //   messages: [
  //     {
  //         "role": "user",
  //         "content": [
  //             {
  //                 "type": "text",
  //                 "text": "What are in these image?",
  //             },
  //             {
  //                 "type": "image_url",
  //                 "image_url": {"url": `data:image/png;base64,{image_data}`},
  //             },
  //         ],
  //     }
  // ],
  imageTransformFragment = (fragment: any) => {
    // Filter out images above 1MB
    if (
      fragment?.type === "image" &&
      fragment?.source?.type === "base64" &&
      fragment?.source?.data.length > 1024 * 1024
    ) {
      return {
        type: "text",
        text: "Image too large to capture\n\n",
      };
    }

    if (fragment?.type === "image" && fragment?.source?.type === "base64") {
      return {
        type: "image_url",
        image_url: {
          url: `data:${fragment.source.media_type};base64,${fragment.source.data}`,
        },
      };
    }
    return fragment;
  };

  imageTransformMessage = (message: any) => {
    // Check for message.content being an array
    if (Array.isArray(message?.content)) {
      message.content = message.content.map(this.imageTransformFragment);
    } else {
      message.content = this.imageTransformFragment(message.content);
    }

    return message;
  };

  // Redact images from the message
  removeImagesInMessage = (message: any) => {
    // Check for message.content being an array
    const removeImages = (fragment: any) => {
      if (fragment?.type === "image") {
        return {
          type: "text",
          text: "Image removed\n\n",
        };
      }
      return fragment;
    };

    if (Array.isArray(message?.content)) {
      message.content = message.content.map(removeImages);
    } else {
      message.content = removeImages(message.content);
    }

    return message;
  };

  async logCompletion(completion: any): Promise<void> {
    try {
      return axios.post(
        `${this.options$.serverURL}/api/v1/completions`,
        {
          ...completion,
          organization_id: this.options$.xLog10Organization,
          kind: "chat",
          status: "finished",
          tags: this.tags || [],
        },
        {
          headers: {
            "x-log10-token":
              typeof this.options$.log10Token === "function"
                ? await this.options$.log10Token()
                : this.options$.log10Token,
            "x-log10-organization": this.options$.xLog10Organization,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error logging completion:", error);
    }
  }

  async *wrappedResponse(response: any, request: any) {
    try {
      let lastChunk: any = { choices: [{ delta: { content: "" } }] };
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
        created: 0,
      };

      finalResponse.choices[0].message = { content: buffer, role: "assistant" };
      delete finalResponse.choices[0].delta;

      this.logCompletion({
        request,
        response: { ...finalResponse, system_fingerprint: "" },
      });
    } catch (error) {
      console.error("Error logging completion:", error);
    }
  }

  wrap(client: any) {
    const ref = client.chat.completions.create;
    client.chat.completions.create = async (...args: any) => {
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

  async *wrappedBedrockResponse(response: any, request: any) {
    try {
      let buffer = "";
      for await (const chunk of response.body) {
        const decoded = new TextDecoder().decode(chunk.chunk?.bytes);
        const parsed = JSON.parse(decoded);
        if (parsed.type === "content_block_delta") {
          buffer += parsed.delta?.text || "";
        }
        yield chunk;
      }

      // Transform the request/response for logging
      const requestBody = JSON.parse(
        typeof request.input.body === "string"
          ? request.input.body
          : new TextDecoder().decode(
              request.input.body instanceof Uint8Array
                ? request.input.body
                : new Uint8Array(request.input.body as ArrayBuffer)
            )
      );

      const transformedRequest = {
        model: request.input.modelId,
        messages: requestBody.messages || [
          {
            role: "user",
            content: requestBody.prompt,
          },
        ],
        max_tokens: requestBody.max_tokens,
        temperature: requestBody.temperature,
      };

      if (requestBody.system) {
        transformedRequest.messages.unshift({
          role: "system",
          content: requestBody.system,
        });
      }

      const transformedResponse = {
        id: `stream-${Date.now()}`,
        object: "chat.completion",
        created: Date.now(),
        model: request.input.modelId,
        choices: [
          {
            message: {
              role: "assistant",
              content: buffer,
            },
            logprobs: null,
            index: 0,
            finish_reason: "stop",
          },
        ],
        usage: {
          prompt_tokens: -1,
          completion_tokens: -1,
          total_tokens: -1,
        },
      };

      // If the total size of the request or response may exceed the limit, we drop all images.
      if (JSON.stringify(transformedRequest).length > 1024 * 1024) {
        transformedRequest.messages = transformedRequest.messages.map(
          this.removeImagesInMessage
        );
      }
      if (
        transformedResponse?.choices[0]?.message &&
        JSON.stringify(transformedResponse).length > 1024 * 1024
      ) {
        transformedResponse.choices[0].message = this.removeImagesInMessage(
          transformedResponse.choices[0].message
        );
      }

      // Post process the messages to transform images
      transformedRequest.messages = transformedRequest.messages.map(
        this.imageTransformMessage
      );
      if (transformedResponse?.choices[0]?.message) {
        transformedResponse.choices[0].message = this.imageTransformMessage(
          transformedResponse.choices[0].message
        );
      }

      this.logCompletion({
        request: transformedRequest,
        response: transformedResponse,
      });
    } catch (error) {
      console.error("Error in wrappedBedrockResponse:", error);
    }
  }

  wrapBedrock(client: any) {
    const originalSend = client.send;

    client.send = async (command: any, ...args: any[]) => {
      if (
        !(command instanceof InvokeModelCommand) &&
        !(command instanceof InvokeModelWithResponseStreamCommand)
      ) {
        return originalSend.call(client, command, ...args);
      }

      const response = await originalSend.call(client, command, ...args);

      // Handle streaming response
      if (command instanceof InvokeModelWithResponseStreamCommand) {
        return {
          ...response,
          body: this.wrappedBedrockResponse(response, command),
        };
      }

      // Handle non-streaming response
      const requestBody = JSON.parse(
        typeof command.input.body === "string"
          ? command.input.body
          : new TextDecoder().decode(
              command.input.body instanceof Uint8Array
                ? command.input.body
                : new Uint8Array(command.input.body as ArrayBuffer)
            )
      );
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));

      // Transform Bedrock format to OpenAI-like format for logging
      const transformedRequest = {
        model: command.input.modelId,
        messages: requestBody.messages || [
          {
            role: "user",
            content: requestBody.prompt,
          },
        ],
        max_tokens: requestBody.max_tokens,
        temperature: requestBody.temperature,
      };

      if (requestBody.system) {
        transformedRequest.messages.unshift({
          role: "system",
          content: requestBody.system,
        });
      }

      const transformedResponse = {
        id: response.$metadata.requestId,
        object: "chat.completion",
        created: Date.now(),
        model: command.input.modelId,
        choices: [
          {
            message: {
              role: "assistant",
              content:
                responseBody.content?.[0]?.text || responseBody.completion,
            },
            logprobs: null,
            index: 0,
            finish_reason: "stop",
          },
        ],
        usage: {
          prompt_tokens: -1,
          completion_tokens: -1,
          total_tokens: -1,
        },
      };

      // If the total size of the request or response may exceed the limit, we drop all images.
      if (JSON.stringify(transformedRequest).length > 1024 * 1024) {
        transformedRequest.messages = transformedRequest.messages.map(
          this.removeImagesInMessage
        );
      }
      if (
        transformedResponse?.choices[0]?.message &&
        JSON.stringify(transformedResponse).length > 1024 * 1024
      ) {
        transformedResponse.choices[0].message = this.removeImagesInMessage(
          transformedResponse.choices[0].message
        );
      }

      transformedRequest.messages = transformedRequest.messages.map(
        this.imageTransformMessage
      );
      if (transformedResponse?.choices[0]?.message) {
        transformedResponse.choices[0].message = this.imageTransformMessage(
          transformedResponse.choices[0].message
        );
      }

      this.logCompletion({
        request: transformedRequest,
        response: transformedResponse,
      });

      return response;
    };
  }
}

export { Log10Wrapper };

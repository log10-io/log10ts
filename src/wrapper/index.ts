// log10.ts

import axios from "axios";

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
        created: 0
      };

      finalResponse.choices[0].message = {content: buffer, role: "assistant"};
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
}

export { Log10Wrapper };

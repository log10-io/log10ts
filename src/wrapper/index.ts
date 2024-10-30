// log10.ts

import axios from "axios";

import { SDKOptions } from "..";
import { SDKHooks } from "../hooks/hooks";

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
      const response = await axios.post(
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

      console.log("Completion logged successfully:", response.data);
    } catch (error) {
      console.error("Error logging completion:", error);
    }
  }

  async createFeedbackTask(taskSchema: any, name: string): Promise<string> {
    try {
      const response = await axios.post(
        `${this.options$.serverURL}/api/v1/feedback_task`,
        {
          json_schema: taskSchema,
          name: name,
          organization_id: this.options$.xLog10Organization,
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
      return response.data.id;
    } catch (error) {
      console.error("Error creating feedback task:", error);
      throw error;
    }
  }

  async createFeedback(
    taskId: string,
    values: any,
    completionTagsSelector: string[]
  ): Promise<void> {
    try {
      await axios.post(
        `${this.options$.serverURL}/api/v1/feedback`,
        {
          task_id: taskId,
          json_values: values,
          completion_tags_selector: completionTagsSelector,
          organization_id: this.options$.xLog10Organization,
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
      console.error("Error creating feedback:", error);
      throw error;
    }
  }

  wrap(client: any) {
    const ref = client.chat.completions.create;
    client.chat.completions.create = async (...args: any) => {
      const response = await ref.call(client.chat.completions, ...args);

      this.logCompletion({
        request: args[0],
        response: { ...response, system_fingerprint: "" },
      });

      return response;
    };
  }
}

export { Log10Wrapper };

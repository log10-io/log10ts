// log10.ts

import axios from "axios";

interface Log10Config {
  url: string;
  token: string;
  orgId: string;
  tags?: string[];
}

class Log10 {
  private config: Log10Config;

  constructor(config: Log10Config) {
    this.config = config;
  }

  async logCompletion(completion: any): Promise<void> {
    try {
      const response = await axios.post(
        `${this.config.url}/api/v1/completions`,
        {
          ...completion,
          organization_id: this.config.orgId,
          kind: "chat",
          status: "finished",
          tags: this.config.tags || [],
        },
        {
          headers: {
            "x-log10-token": this.config.token,
            "x-log10-organization": this.config.orgId,
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
        `${this.config.url}/api/v1/feedback_task`,
        {
          json_schema: taskSchema,
          name: name,
          organization_id: this.config.orgId,
        },
        {
          headers: {
            "x-log10-token": this.config.token,
            "x-log10-organization": this.config.orgId,
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
        `${this.config.url}/api/v1/feedback`,
        {
          task_id: taskId,
          json_values: values,
          completion_tags_selector: completionTagsSelector,
          organization_id: this.config.orgId,
        },
        {
          headers: {
            "x-log10-token": this.config.token,
            "x-log10-organization": this.config.orgId,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error creating feedback:", error);
      throw error;
    }
  }

  wrapper(client: any) {
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

export { Log10, Log10Config };

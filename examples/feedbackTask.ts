import { Log10, SDKOptions } from "log10ts";

const options: SDKOptions = {
  log10Token: process.env["LOG10_TOKEN"] || "",
  xLog10Organization: process.env["LOG10_ORG_ID"] || "",
  serverURL: "https://log10.io",
};

const log10 = new Log10(options);

async function run() {
  const taskSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Summary Evaluation",
    type: "object",
    properties: {
      relevance: {
        type: "integer",
        minimum: 1,
        maximum: 7,
        description:
          "The relevance of the summary to the content being summarized, rated from 1 (least relevant) to 7 (most relevant)",
      },
      coherence: {
        type: "integer",
        minimum: 1,
        maximum: 7,
        description:
          "The coherence and logical flow of the summary, rated from 1 (least coherent) to 7 (most coherent)",
      },
    },
    required: ["relevance", "coherence"],
    additionalProperties: false,
  };

  const task = {
    organizationId: process.env["LOG10_ORG_ID"] || "",
    jsonSchema: taskSchema,
    name: "Test Task",
    instruction: "Test Instruction",
    completionTagsSelector: ["test"],
  };

  const result = await log10.feedbackTasks.create(task);

  // Handle the result
  console.log("Task id: ", result?.task?.id);
}

run();

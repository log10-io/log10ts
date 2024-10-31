import { Log10, SDKOptions } from "log10ts";

const options: SDKOptions = {
  log10Token: process.env["LOG10_TOKEN"] || "",
  xLog10Organization: process.env["LOG10_ORG_ID"] || "",
  serverURL: "https://log10.io",
};

const log10 = new Log10(options);

async function run() {
  const result = await log10.feedbackTasks.create({
    jsonSchema: {},
    name: "Test Task",
    instruction: "Test Instruction",
    completionTagsSelector: {},
  });

  // Handle the result
  console.log(result);
}

run();

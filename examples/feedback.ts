import { Log10, SDKOptions } from "log10ts";

const options: SDKOptions = {
  log10Token: process.env["LOG10_TOKEN"] || "",
  xLog10Organization: process.env["LOG10_ORG_ID"] || "",
  serverURL: "https://log10.io",
};

const log10 = new Log10(options);

async function run() {
  const taskID = "<<REPLACE WITH YOUR TASK ID>>";

  const feedback = {
    organizationId: process.env["LOG10_ORG_ID"] || "",
    taskId: taskID,
    jsonValues: {
      relevance: 5,
      coherence: 6,
    },
    comment: "",
    completionTagsSelector: ["foobar"],
  };

  const result = await log10.feedbackSDK.upload(feedback);

  // Handle the result
  console.log("Result: ", result);
}

run();

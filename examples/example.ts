// Usage example

import { Log10, Log10Config } from "../src/wrapper";

const config: Log10Config = {
  url: "https://log10.io",
  token: "36f067be-5833-4998-a814-f1b17a3185e3",
  orgId: "ce49a3de-7f73-4f5b-8c49-d574701c89c2",
  tags: ["example"],
};

const log10 = new Log10(config);
import OpenAI from "openai";

async function main() {
  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });
  log10.wrapper(client);

  const response2 = await client.chat.completions.create({
    messages: [{ role: "user", content: "Knock knock - who is there?" }],
    model: "gpt-3.5-turbo",
  });

  console.log("Response 2", response2);

  // // Create a feedback task
  // const taskSchema = {
  //   title: 'Summary Evaluation',
  //   type: 'object',
  //   properties: {
  //     relevance: { type: 'integer', minimum: 1, maximum: 7 },
  //     coherence: { type: 'integer', minimum: 1, maximum: 7 },
  //   },
  // };

  // log10.createFeedbackTask(taskSchema, 'Summary grading task')
  //   .then((taskId) => {
  //     console.log('Created feedback task with ID:', taskId);

  //     // Create feedback
  //     log10.createFeedback(taskId, { relevance: 5, coherence: 6 }, ['summarization_v1'])
  //       .then(() => console.log('Feedback created successfully'))
  //       .catch((error) => console.error('Error creating feedback:', error));
  //   })
  //   .catch((error) => console.error('Error creating feedback task:', error));
}

main();

// Usage example
import OpenAI from "openai";

import { SDKOptions } from "../src";
import { Log10Wrapper } from "../src/wrapper";

const options: SDKOptions = {
  log10Token: process.env["LOG10_TOKEN"] || "",
  xLog10Organization: process.env["LOG10_ORG_ID"] || "",
  serverURL: "https://log10.io",
};

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});
const wrapper = new Log10Wrapper(options);
wrapper.wrap(client);


async function main() {
  const response = await client.chat.completions.create({
    messages: [{ role: "user", content: "Knock knock - who is there?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(response);
}

main();

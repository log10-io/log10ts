// this example uses the AWS SDK for Bedrock Runtime
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { fromIni } from "@aws-sdk/credential-providers";
import { SDKOptions } from "../src";
import { Log10Wrapper } from "../src/wrapper";
import fs from "fs";

const options: SDKOptions = {
  log10Token: process.env["LOG10_TOKEN"] || "",
  xLog10Organization: process.env["LOG10_ORG_ID"] || "",
  serverURL: "https://log10.io",
};

const client = new BedrockRuntimeClient({
  region: "us-west-2",
  credentials: fromIni({ profile: "default" }), // Load credentials from your AWS profile
});
const wrapper = new Log10Wrapper(options, ["bedrock-claude-tag"]);
wrapper.wrapBedrock(client);

async function main() {
  // Read example.jpg as a base64 string
  const small_image = fs.readFileSync("example-small.jpg", "base64");

  const messages: any[] = [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "What is in this image?",
        },
      ],
    },
  ];

  for (let i = 0; i < 20; i++) {
    messages.unshift({
      role: "user",
      content: [
        {
          type: "image",
          source: {
            type: "base64",
            media_type: "image/jpeg",
            data: small_image,
          },
        },
        {
          type: "text",
          text: "What is in this image?",
        },
      ],
    });
  }

  const command = new InvokeModelCommand({
    contentType: "application/json",
    modelId: "anthropic.claude-3-5-sonnet-20241022-v2:0",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      system: "you are a sarcastic assistant",
      messages: messages,
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  try {
    const response = await client.send(command);
    console.log(response);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    console.log(responseBody.content[0].text);
  } catch (error) {
    console.error(error);
  }
}

main();

import { BedrockRuntimeClient, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";
import { fromIni } from "@aws-sdk/credential-providers";
import { SDKOptions } from "log10ts";
import { Log10Wrapper } from "log10ts/wrapper";

const options: SDKOptions = {
  log10Token: process.env["LOG10_TOKEN"] || "",
  xLog10Organization: process.env["LOG10_ORG_ID"] || "",
  serverURL: "https://log10.io",
};

const client = new BedrockRuntimeClient({
  region: "us-west-2",
  credentials: fromIni({ profile: "default" })
});
const wrapper = new Log10Wrapper(options, ["bedrock-claude-streaming-tag"]);
wrapper.wrapBedrock(client);

async function main() {
  const command = new InvokeModelWithResponseStreamCommand({
    contentType: "application/json",
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      system: "you are a sarcastic assistant",
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: "Tell me a story about a robot" }],
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  try {
    const response = await client.send(command);
    for await (const chunk of response.body) {
      const decoded = new TextDecoder().decode(chunk.chunk?.bytes);
      const parsed = JSON.parse(decoded);
      if (parsed.type === 'content_block_delta') {
        process.stdout.write(parsed.delta?.text || '');
      }
    }
  } catch (error) {
    console.error(error);
  }
}

main();
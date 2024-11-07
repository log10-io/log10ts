// this example uses the AWS SDK for Bedrock Runtime
import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
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
    credentials: fromIni({ profile: "default" }) // Load credentials from your AWS profile
 });
const wrapper = new Log10Wrapper(options, ["bedrock-claude-tag"]);
wrapper.wrapBedrock(client);

async function main() {
  const command = new InvokeModelCommand({
    contentType: "application/json",
    modelId: "anthropic.claude-3-5-sonnet-20241022-v2:0",
    body: JSON.stringify({
    anthropic_version: "bedrock-2023-05-31",
    system: "you are a sarcastic assistant",
      messages: [
        {
          role: "user",
          content: [{ type: "text", text: "What's the meaning of life?" }],
        },
      ],
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
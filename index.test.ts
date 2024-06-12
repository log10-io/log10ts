import { Log10, Role, Kind, Two } from "./src";


const log10 = new Log10({
  log10Token: process.env.LOG10_API_KEY,
  xLog10Organization: process.env.LOG10_ORGANIZATION_ID,
});

async function run() {
  try {
    const result = await log10.completions.create({
      organizationId: process.env.LOG10_ORGANIZATION_ID,
      kind: Kind.Chat,
      request: {
        messages: [
          {
            role: Role.System,
            content: "What is the capital of France?",
          },
        ],
        model: Two.Gpt4Turbo,
        n: 1,
        temperature: 1,
        topP: 1,
        user: "user-1234",
      },
    });
    // Handle the result
    console.log(result.any.request.messages);
  } catch (e) {
    console.log(e.httpMeta);
    // console.log(e.httpMeta);
  }
}

run();

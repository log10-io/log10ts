# CreateResponse

## Example Usage

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  CreateResponse,
  FinishReason,
  Kind,
  ObjectT,
} from "log10ts";

let value: CreateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  completion: {
    organizationId: "<id>",
    kind: Kind.Prompt,
    request: {
      messages: [
        {
          role: ChatCompletionRole.Function,
        },
      ],
      model: "gpt-4-turbo",
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
    response: {
      id: "<id>",
      choices: [
        {
          finishReason: FinishReason.Stop,
          index: 87129,
          message: {
            content: "<value>",
            role: ChatCompletionRole.System,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 8326.20,
                bytes: [
                  778157,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 8700.12,
                    bytes: [
                      978619,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 799159,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `httpMeta`                                       | [models.HTTPMetadata](../models/httpmetadata.md) | :heavy_check_mark:                               | N/A                                              |
| `any`                                            | *any*                                            | :heavy_minus_sign:                               | Created                                          |
| `completion`                                     | [models.Completion](../models/completion.md)     | :heavy_minus_sign:                               | Created                                          |
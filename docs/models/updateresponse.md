# UpdateResponse

## Example Usage

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  ObjectT,
  UpdateResponse,
} from "log10ts";

let value: UpdateResponse = {
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
          role: ChatCompletionRole.Tool,
          content: "<value>",
          name: "<value>",
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
          finishReason: FinishReason.ContentFilter,
          index: 501324,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Function,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 6439.90,
                bytes: [
                  423855,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 6063.93,
                    bytes: [
                      19193,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 301575,
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
| `completion`                                     | [models.Completion](../models/completion.md)     | :heavy_minus_sign:                               | OK                                               |
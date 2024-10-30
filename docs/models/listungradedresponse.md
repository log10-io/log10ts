# ListUngradedResponse

## Example Usage

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  ListUngradedResponse,
  ObjectT,
} from "log10ts";

let value: ListUngradedResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  object: {
    completions: [
      {
        organizationId: "<id>",
        kind: Kind.Chat,
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
              finishReason: FinishReason.FunctionCall,
              index: 703889,
              message: {
                content: "<value>",
                role: ChatCompletionRole.System,
              },
              logprobs: {
                content: [
                  {
                    token: "<value>",
                    logprob: 9194.83,
                    bytes: [
                      714242,
                    ],
                    topLogprobs: [
                      {
                        token: "<value>",
                        logprob: 9988.47,
                        bytes: [
                          149448,
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          ],
          created: 868126,
          model: "gpt-4-turbo",
          object: ObjectT.ChatCompletion,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [models.HTTPMetadata](../models/httpmetadata.md)                         | :heavy_check_mark:                                                       | N/A                                                                      |
| `object`                                                                 | [models.ListUngradedResponseBody](../models/listungradedresponsebody.md) | :heavy_minus_sign:                                                       | OK                                                                       |
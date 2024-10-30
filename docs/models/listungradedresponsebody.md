# ListUngradedResponseBody

OK

## Example Usage

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  ListUngradedResponseBody,
  ObjectT,
  Type,
} from "log10ts";

let value: ListUngradedResponseBody = {
  completions: [
    {
      organizationId: "<id>",
      kind: Kind.Prompt,
      request: {
        messages: [
          {
            content: [
              {
                type: Type.Text,
                text: "<value>",
              },
            ],
            role: ChatCompletionRole.System,
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
            finishReason: FinishReason.Length,
            index: 569965,
            message: {
              content: "<value>",
              role: ChatCompletionRole.Assistant,
            },
            logprobs: {
              content: [
                {
                  token: "<value>",
                  logprob: 5743.25,
                  bytes: [
                    653201,
                  ],
                  topLogprobs: [
                    {
                      token: "<value>",
                      logprob: 6521.03,
                      bytes: [
                        431418,
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ],
        created: 896547,
        model: "gpt-4-turbo",
        object: ObjectT.ChatCompletion,
      },
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `completions`                                  | [models.Completion](../models/completion.md)[] | :heavy_minus_sign:                             | N/A                                            |
# CreateRequest

## Example Usage

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  CreateRequest,
  FinishReason,
  Kind,
  ObjectT,
} from "log10ts";

let value: CreateRequest = {
  completion: {
    organizationId: "<id>",
    kind: Kind.Prompt,
    request: {
      messages: [
        {
          role: ChatCompletionRole.Tool,
          content: "<value>",
          toolCallId: "<id>",
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
          finishReason: FinishReason.ToolCalls,
          index: 423655,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Tool,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 4375.87,
                bytes: [
                  891773,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 9636.63,
                    bytes: [
                      383441,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 791725,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `xLog10Organization`                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `completion`                                 | [models.Completion](../models/completion.md) | :heavy_check_mark:                           | N/A                                          |
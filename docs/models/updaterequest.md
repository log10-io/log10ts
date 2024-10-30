# UpdateRequest

## Example Usage

```typescript
import {
  ChatCompletionRequestMessageContentPartImageType,
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  ObjectT,
  UpdateRequest,
} from "log10ts";

let value: UpdateRequest = {
  completionId: "<id>",
  completion: {
    organizationId: "<id>",
    kind: Kind.Prompt,
    request: {
      messages: [
        {
          content: [
            {
              type: ChatCompletionRequestMessageContentPartImageType.ImageUrl,
              imageUrl: {
                url: "https://orange-mozzarella.name/",
              },
            },
          ],
          role: ChatCompletionRole.User,
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
          index: 447125,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Function,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 6994.79,
                bytes: [
                  297437,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 8137.98,
                    bytes: [
                      396506,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 881104,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `completionId`                               | *string*                                     | :heavy_check_mark:                           | The completion id to update.                 |
| `xLog10Organization`                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `completion`                                 | [models.Completion](../models/completion.md) | :heavy_check_mark:                           | N/A                                          |
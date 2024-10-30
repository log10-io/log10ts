# Completion

## Example Usage

```typescript
import {
  ChatCompletionRole,
  Completion,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  ObjectT,
} from "log10ts";

let value: Completion = {
  organizationId: "<id>",
  kind: Kind.Prompt,
  request: {
    messages: [
      {
        content: "<value>",
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
        finishReason: FinishReason.ToolCalls,
        index: 414662,
        message: {
          content: "<value>",
          role: ChatCompletionRole.User,
        },
        logprobs: {
          content: [
            {
              token: "<value>",
              logprob: 7742.34,
              bytes: [
                456150,
              ],
              topLogprobs: [
                {
                  token: "<value>",
                  logprob: 5684.34,
                  bytes: [
                    18789,
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
    created: 617636,
    model: "gpt-4-turbo",
    object: ObjectT.ChatCompletion,
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | The unique identifier for this task.                                                  |
| `organizationId`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | The unique identifier for the organization.                                           |
| `kind`                                                                                | [models.Kind](../models/kind.md)                                                      | :heavy_check_mark:                                                                    | The kind of completion i.e. chat messages or prompt                                   |
| `status`                                                                              | [models.Status](../models/status.md)                                                  | :heavy_minus_sign:                                                                    | The status of this completion.                                                        |
| `tags`                                                                                | *string*[]                                                                            | :heavy_minus_sign:                                                                    | The tags for this completion.                                                         |
| `request`                                                                             | [models.CreateChatCompletionRequest](../models/createchatcompletionrequest.md)        | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `response`                                                                            | [models.CreateChatCompletionResponse](../models/createchatcompletionresponse.md)      | :heavy_minus_sign:                                                                    | Represents a chat completion response returned by model, based on the provided input. |
| `stacktrace`                                                                          | [models.Stacktrace](../models/stacktrace.md)[]                                        | :heavy_minus_sign:                                                                    | The stacktrace for this completion.                                                   |
| `sessionId`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | The session id for this completion.                                                   |
| `duration`                                                                            | *number*                                                                              | :heavy_minus_sign:                                                                    | The duration of this completion in seconds.                                           |
| `failureKind`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | The failure kind of this completion.                                                  |
| `failureReason`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | The failure reason of this completion.                                                |
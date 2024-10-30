# ChatCompletionMessageToolCall

## Example Usage

```typescript
import { ChatCompletionMessageToolCall, ChatCompletionMessageToolCallType } from "log10ts";

let value: ChatCompletionMessageToolCall = {
  id: "<id>",
  type: ChatCompletionMessageToolCallType.Function,
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the tool call.                                                                   |
| `type`                                                                                     | [models.ChatCompletionMessageToolCallType](../models/chatcompletionmessagetoolcalltype.md) | :heavy_check_mark:                                                                         | The type of the tool. Currently, only `function` is supported.                             |
| `function`                                                                                 | [models.FunctionT](../models/functiont.md)                                                 | :heavy_check_mark:                                                                         | The function that the model called.                                                        |
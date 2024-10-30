# ~~ChatCompletionRequestFunctionMessage~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ChatCompletionRequestFunctionMessage, ChatCompletionRole } from "log10ts";

let value: ChatCompletionRequestFunctionMessage = {
  role: ChatCompletionRole.System,
  content: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `role`                                                       | [models.ChatCompletionRole](../models/chatcompletionrole.md) | :heavy_check_mark:                                           | The role of the author of a message                          |
| `content`                                                    | *string*                                                     | :heavy_check_mark:                                           | The contents of the function message.                        |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The name of the function to call.                            |
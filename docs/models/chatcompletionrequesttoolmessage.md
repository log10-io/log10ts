# ChatCompletionRequestToolMessage

## Example Usage

```typescript
import { ChatCompletionRequestToolMessage, ChatCompletionRole } from "log10ts";

let value: ChatCompletionRequestToolMessage = {
  role: ChatCompletionRole.Function,
  content: "<value>",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `role`                                                       | [models.ChatCompletionRole](../models/chatcompletionrole.md) | :heavy_check_mark:                                           | The role of the author of a message                          |
| `content`                                                    | *string*                                                     | :heavy_check_mark:                                           | The contents of the tool message.                            |
| `toolCallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Tool call that this message is responding to.                |
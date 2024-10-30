# ChatCompletionRequestSystemMessage

## Example Usage

```typescript
import { ChatCompletionRequestSystemMessage, ChatCompletionRole } from "log10ts";

let value: ChatCompletionRequestSystemMessage = {
  content: "<value>",
  role: ChatCompletionRole.User,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The contents of the system message.                                                                                          |
| `role`                                                                                                                       | [models.ChatCompletionRole](../models/chatcompletionrole.md)                                                                 | :heavy_check_mark:                                                                                                           | The role of the author of a message                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
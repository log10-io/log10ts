# ChatCompletionRequestUserMessage

## Example Usage

```typescript
import { ChatCompletionRequestUserMessage, ChatCompletionRole } from "log10ts";

let value: ChatCompletionRequestUserMessage = {
  content: "<value>",
  role: ChatCompletionRole.Tool,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | *models.Content*                                                                                                             | :heavy_check_mark:                                                                                                           | The contents of the user message.<br/>                                                                                       |
| `role`                                                                                                                       | [models.ChatCompletionRole](../models/chatcompletionrole.md)                                                                 | :heavy_check_mark:                                                                                                           | The role of the author of a message                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
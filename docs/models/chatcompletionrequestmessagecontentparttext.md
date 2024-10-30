# ChatCompletionRequestMessageContentPartText

## Example Usage

```typescript
import { ChatCompletionRequestMessageContentPartText, Type } from "log10ts";

let value: ChatCompletionRequestMessageContentPartText = {
  type: Type.Text,
  text: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `type`                           | [models.Type](../models/type.md) | :heavy_check_mark:               | The type of the content part.    |
| `text`                           | *string*                         | :heavy_check_mark:               | The text content.                |
# ChatCompletionRequestMessageContentPartImage

## Example Usage

```typescript
import {
  ChatCompletionRequestMessageContentPartImage,
  ChatCompletionRequestMessageContentPartImageType,
} from "log10ts";

let value: ChatCompletionRequestMessageContentPartImage = {
  type: ChatCompletionRequestMessageContentPartImageType.ImageUrl,
  imageUrl: {
    url: "https://forsaken-contractor.name",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [models.ChatCompletionRequestMessageContentPartImageType](../models/chatcompletionrequestmessagecontentpartimagetype.md) | :heavy_check_mark:                                                                                                       | The type of the content part.                                                                                            |
| `imageUrl`                                                                                                               | [models.ImageUrl](../models/imageurl.md)                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
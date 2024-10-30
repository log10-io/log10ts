# ChatCompletionRequestMessageContentPart


## Supported Types

### `models.ChatCompletionRequestMessageContentPartText`

```typescript
const value: models.ChatCompletionRequestMessageContentPartText = {
  type: Type.Text,
  text: "<value>",
};
```

### `models.ChatCompletionRequestMessageContentPartImage`

```typescript
const value: models.ChatCompletionRequestMessageContentPartImage = {
  type: ChatCompletionRequestMessageContentPartImageType.ImageUrl,
  imageUrl: {
    url: "https://favorite-lid.com",
  },
};
```


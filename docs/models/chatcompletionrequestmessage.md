# ChatCompletionRequestMessage


## Supported Types

### `models.ChatCompletionRequestSystemMessage`

```typescript
const value: models.ChatCompletionRequestSystemMessage = {
  content: "<value>",
  role: ChatCompletionRole.Tool,
};
```

### `models.ChatCompletionRequestUserMessage`

```typescript
const value: models.ChatCompletionRequestUserMessage = {
  content: [
    {
      type: Type.Text,
      text: "<value>",
    },
  ],
  role: ChatCompletionRole.User,
};
```

### `models.ChatCompletionRequestAssistantMessage`

```typescript
const value: models.ChatCompletionRequestAssistantMessage = {
  role: ChatCompletionRole.System,
};
```

### `models.ChatCompletionRequestToolMessage`

```typescript
const value: models.ChatCompletionRequestToolMessage = {
  role: ChatCompletionRole.User,
  content: "<value>",
  toolCallId: "<id>",
};
```

### `models.ChatCompletionRequestFunctionMessage`

```typescript
const value: models.ChatCompletionRequestFunctionMessage = {
  role: ChatCompletionRole.System,
  content: "<value>",
  name: "<value>",
};
```


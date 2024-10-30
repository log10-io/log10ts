# ChatCompletionToolChoiceOption

Controls which (if any) tool is called by the model.
`none` means the model will not call any tool and instead generates a message.
`auto` means the model can pick between generating a message or calling one or more tools.
`required` means the model must call one or more tools.
Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.

`none` is the default when no tools are present. `auto` is the default if tools are present.



## Supported Types

### `models.ChatCompletionToolChoiceOption1`

```typescript
const value: models.ChatCompletionToolChoiceOption1 =
  ChatCompletionToolChoiceOption1.Required;
```

### `models.ChatCompletionNamedToolChoice`

```typescript
const value: models.ChatCompletionNamedToolChoice = {
  type: ChatCompletionNamedToolChoiceType.Function,
  function: {
    name: "<value>",
  },
};
```


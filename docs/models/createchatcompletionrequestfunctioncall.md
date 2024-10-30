# ~~CreateChatCompletionRequestFunctionCall~~

Deprecated in favor of `tool_choice`.

Controls which (if any) function is called by the model.
`none` means the model will not call a function and instead generates a message.
`auto` means the model can pick between generating a message or calling a function.
Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.

`none` is the default when no functions are present. `auto` is the default if functions are present.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `models.One`

```typescript
const value: models.One = One.Auto;
```

### `models.ChatCompletionFunctionCallOption`

```typescript
const value: models.ChatCompletionFunctionCallOption = {
  name: "<value>",
};
```


# ChatCompletionFunctionCallOption

Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.


## Example Usage

```typescript
import { ChatCompletionFunctionCallOption } from "log10ts";

let value: ChatCompletionFunctionCallOption = {
  name: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `name`                            | *string*                          | :heavy_check_mark:                | The name of the function to call. |
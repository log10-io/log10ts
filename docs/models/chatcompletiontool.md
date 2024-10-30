# ChatCompletionTool

## Example Usage

```typescript
import { ChatCompletionTool, ChatCompletionToolType } from "log10ts";

let value: ChatCompletionTool = {
  type: ChatCompletionToolType.Function,
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [models.ChatCompletionToolType](../models/chatcompletiontooltype.md) | :heavy_check_mark:                                                   | The type of the tool. Currently, only `function` is supported.       |
| `function`                                                           | [models.FunctionObject](../models/functionobject.md)                 | :heavy_check_mark:                                                   | N/A                                                                  |
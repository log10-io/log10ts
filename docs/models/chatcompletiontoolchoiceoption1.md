# ChatCompletionToolChoiceOption1

`none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools.


## Example Usage

```typescript
import { ChatCompletionToolChoiceOption1 } from "log10ts";

let value: ChatCompletionToolChoiceOption1 =
  ChatCompletionToolChoiceOption1.Auto;
```

## Values

| Name       | Value      |
| ---------- | ---------- |
| `None`     | none       |
| `Auto`     | auto       |
| `Required` | required   |
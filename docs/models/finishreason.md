# FinishReason

The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
`length` if the maximum number of tokens specified in the request was reached,
`content_filter` if content was omitted due to a flag from our content filters,
`tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.


## Example Usage

```typescript
import { FinishReason } from "log10ts";

let value: FinishReason = FinishReason.ContentFilter;
```

## Values

| Name            | Value           |
| --------------- | --------------- |
| `Stop`          | stop            |
| `Length`        | length          |
| `ToolCalls`     | tool_calls      |
| `ContentFilter` | content_filter  |
| `FunctionCall`  | function_call   |
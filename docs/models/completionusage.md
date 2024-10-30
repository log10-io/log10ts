# CompletionUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { CompletionUsage } from "log10ts";

let value: CompletionUsage = {
  completionTokens: 653108,
  promptTokens: 253291,
  totalTokens: 466311,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |
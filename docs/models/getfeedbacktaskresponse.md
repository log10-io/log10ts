# GetFeedbackTaskResponse

## Example Usage

```typescript
import { GetFeedbackTaskResponse } from "log10ts";

let value: GetFeedbackTaskResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `httpMeta`                                       | [models.HTTPMetadata](../models/httpmetadata.md) | :heavy_check_mark:                               | N/A                                              |
| `task`                                           | [models.Task](../models/task.md)                 | :heavy_minus_sign:                               | OK                                               |
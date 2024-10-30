# UploadResponse

## Example Usage

```typescript
import { UploadResponse } from "log10ts";

let value: UploadResponse = {
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
| `feedback`                                       | [models.Feedback](../models/feedback.md)         | :heavy_minus_sign:                               | OK                                               |
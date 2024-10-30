# CreateSessionResponse

## Example Usage

```typescript
import { CreateSessionResponse } from "log10ts";

let value: CreateSessionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [models.HTTPMetadata](../models/httpmetadata.md)                           | :heavy_check_mark:                                                         | N/A                                                                        |
| `object`                                                                   | [models.CreateSessionResponseBody](../models/createsessionresponsebody.md) | :heavy_minus_sign:                                                         | Created                                                                    |
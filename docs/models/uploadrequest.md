# UploadRequest

## Example Usage

```typescript
import { UploadRequest } from "log10ts";

let value: UploadRequest = {
  requestBody: {
    taskId: "<id>",
    jsonValues: {},
    matchedCompletionIds: [
      "<value>",
    ],
    comment:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    completionIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `xLog10Organization`       | *string*                   | :heavy_minus_sign:         | N/A                        |
| `requestBody`              | *models.UploadRequestBody* | :heavy_check_mark:         | N/A                        |
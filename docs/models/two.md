# Two

## Example Usage

```typescript
import { Two } from "log10ts";

let value: Two = {
  taskId: "<id>",
  jsonValues: {},
  matchedCompletionIds: [
    "<value>",
  ],
  comment: "The Football Is Good For Training And Recreational Purposes",
  completionIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The unique identifier for this feedback.                                       |
| `createdAtMs`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | The epoch this schema was created.                                             |
| `taskId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier for the task associated with this feedback.              |
| `jsonValues`                                                                   | [models.UploadRequestBodyJsonValues](../models/uploadrequestbodyjsonvalues.md) | :heavy_check_mark:                                                             | The values of the feedback. Must be valid JSON according to the task schema.   |
| `matchedCompletionIds`                                                         | *string*[]                                                                     | :heavy_check_mark:                                                             | The matched completion ids associated with this feedback.                      |
| `comment`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The comment associated with this feedback.                                     |
| `completionsSummary`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `completionIds`                                                                | *string*[]                                                                     | :heavy_check_mark:                                                             | The completion ids to associate with this feedback.                            |
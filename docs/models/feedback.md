# Feedback

## Example Usage

```typescript
import { Feedback } from "log10ts";

let value: Feedback = {
  taskId: "<id>",
  jsonValues: {},
  matchedCompletionIds: [
    "<value>",
  ],
  comment:
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | The unique identifier for this feedback.                                     |
| `createdAtMs`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | The epoch this schema was created.                                           |
| `taskId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | The unique identifier for the task associated with this feedback.            |
| `jsonValues`                                                                 | [models.JsonValues](../models/jsonvalues.md)                                 | :heavy_check_mark:                                                           | The values of the feedback. Must be valid JSON according to the task schema. |
| `matchedCompletionIds`                                                       | *string*[]                                                                   | :heavy_check_mark:                                                           | The matched completion ids associated with this feedback.                    |
| `comment`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | The comment associated with this feedback.                                   |
| `completionsSummary`                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
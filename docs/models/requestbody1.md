# RequestBody1

## Example Usage

```typescript
import { RequestBody1 } from "log10ts";

let value: RequestBody1 = {
  taskId: "<id>",
  jsonValues: {
    "key": "<value>",
  },
  comment:
    "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  organizationId: "<id>",
  completionTagsSelector: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The unique identifier for this feedback.                                               |
| `createdAtMs`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | The epoch this schema was created.                                                     |
| `taskId`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier for the task associated with this feedback.                      |
| `jsonValues`                                                                           | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | The values of the feedback. Must be valid JSON according to the task schema.           |
| `matchedCompletionIds`                                                                 | *string*[]                                                                             | :heavy_minus_sign:                                                                     | The matched completion ids associated with this feedback.                              |
| `comment`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The comment associated with this feedback.                                             |
| `completionsSummary`                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `organizationId`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier for the organization.                                            |
| `allowUnmatchedFeedback`                                                               | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to allow unmatched feedback. Defaults to false.                                |
| `maxMatchedCompletions`                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The maximum number of matched completions. Returns error if exceeded. Defaults to 100. |
| `completionTagsSelector`                                                               | *string*[]                                                                             | :heavy_check_mark:                                                                     | The completion tags associated with this feedback.                                     |
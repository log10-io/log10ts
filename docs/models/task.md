# Task

## Example Usage

```typescript
import { Task } from "log10ts";

let value: Task = {
  jsonSchema: {
    "key": "<value>",
  },
  name: "<value>",
  instruction: "<value>",
  completionTagsSelector: [
    "<value>",
  ],
  organizationId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The unique identifier for this task.                                          |
| `createdAtMs`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | The epoch this schema was created.                                            |
| `jsonSchema`                                                                  | Record<string, *any*>                                                         | :heavy_check_mark:                                                            | The schema of the task. Must be valid JSON Schema.                            |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The name of the task.                                                         |
| `instruction`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | The instructions for this task.                                               |
| `completionTagsSelector`                                                      | *string*[]                                                                    | :heavy_check_mark:                                                            | The completion tag matching with this task i.e. surfaced as needing feedback. |
| `organizationId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | The unique identifier for the organization.                                   |
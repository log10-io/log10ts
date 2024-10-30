# Stacktrace

## Example Usage

```typescript
import { Stacktrace } from "log10ts";

let value: Stacktrace = {
  file: "<value>",
  line: "<value>",
  lineno: 1182.74,
  name: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `file`                                                  | *string*                                                | :heavy_check_mark:                                      | The file associated with this stacktrace.               |
| `line`                                                  | *string*                                                | :heavy_check_mark:                                      | The line associated with this stacktrace.               |
| `lineno`                                                | *number*                                                | :heavy_check_mark:                                      | The line number associated with this stacktrace.        |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | The function or module associated with this stacktrace. |
# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "log10ts";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 6169.34,
      bytes: [
        943749,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6818.20,
          bytes: [
            359508,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `content`                                                                      | [models.ChatCompletionTokenLogprob](../models/chatcompletiontokenlogprob.md)[] | :heavy_check_mark:                                                             | A list of message content tokens with log probability information.             |
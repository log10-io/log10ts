# Completions
(*completions*)

## Overview

Completions

### Available Operations

* [create](#create) - Create a completion
* [update](#update) - Update completion by id.
* [listUngraded](#listungraded) - List ungraded completions i.e. completions that have not been associated with feedback but matches task selector.

## create

Create a completion

### Example Usage

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  Log10,
  ObjectT,
} from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await log10.completions.create({
    organizationId: "<id>",
    kind: Kind.Chat,
    request: {
      messages: [
        {
          role: ChatCompletionRole.System,
        },
        {
          content: "<value>",
          role: ChatCompletionRole.Tool,
        },
      ],
      model: "gpt-4-turbo",
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
    response: {
      id: "<id>",
      choices: [
        {
          finishReason: FinishReason.Stop,
          index: 169727,
          message: {
            content: "<value>",
            role: ChatCompletionRole.System,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 8165.87,
                bytes: [
                  752438,
                  957409,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 2596.30,
                    bytes: [
                      486589,
                    ],
                  },
                ],
              },
              {
                token: "<value>",
                logprob: 2303.13,
                bytes: [
                  638424,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 4174.58,
                    bytes: [
                      134365,
                    ],
                  },
                ],
              },
              {
                token: "<value>",
                logprob: 3229.97,
                bytes: [
                  69025,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 7964.74,
                    bytes: [
                      951062,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.Stop,
          index: 651985,
          message: {
            content: "<value>",
            role: ChatCompletionRole.User,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 0.87,
                bytes: [
                  169727,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 899.64,
                    bytes: [
                      792620,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.ContentFilter,
          index: 650237,
          message: {
            content: "<value>",
            role: ChatCompletionRole.User,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 8165.87,
                bytes: [
                  586220,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 7524.37,
                    bytes: [
                      957409,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 523523,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ChatCompletionRole, CreateChatCompletionRequestType, FinishReason, Kind, ObjectT } from "log10ts";
import { Log10Core } from "log10ts/core.js";
import { completionsCreate } from "log10ts/funcs/completionsCreate.js";

// Use `Log10Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const log10 = new Log10Core({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await completionsCreate(log10, {
    organizationId: "<id>",
    kind: Kind.Chat,
    request: {
      messages: [
        {
          role: ChatCompletionRole.System,
        },
        {
          content: "<value>",
          role: ChatCompletionRole.Tool,
        },
      ],
      model: "gpt-4-turbo",
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
    response: {
      id: "<id>",
      choices: [
        {
          finishReason: FinishReason.Stop,
          index: 169727,
          message: {
            content: "<value>",
            role: ChatCompletionRole.System,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 8165.87,
                bytes: [
                  752438,
                  957409,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 2596.30,
                    bytes: [
                      200664,
                    ],
                  },
                ],
              },
              {
                token: "<value>",
                logprob: 2303.13,
                bytes: [
                  15552,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 5235.23,
                    bytes: [
                      27619,
                    ],
                  },
                ],
              },
              {
                token: "<value>",
                logprob: 3229.97,
                bytes: [
                  659682,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 5504.83,
                    bytes: [
                      906537,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.Stop,
          index: 651985,
          message: {
            content: "<value>",
            role: ChatCompletionRole.User,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 4522.24,
                bytes: [
                  496323,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 2597.72,
                    bytes: [
                      782367,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.ContentFilter,
          index: 650237,
          message: {
            content: "<value>",
            role: ChatCompletionRole.User,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 1373.24,
                bytes: [
                  703441,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 9209.94,
                    bytes: [
                      780486,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 523523,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `completion`                                                                                                                                                                   | [models.Completion](../../models/completion.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `xLog10Organization`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateResponse](../../models/createresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## update

Update completion by id.

### Example Usage

```typescript
import {
  ChatCompletionRequestMessageContentPartImageType,
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  Log10,
  ObjectT,
  Type,
} from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await log10.completions.update({
    organizationId: "<id>",
    kind: Kind.Prompt,
    request: {
      messages: [
        {
          content: [
            {
              type: Type.Text,
              text: "<value>",
            },
            {
              type: ChatCompletionRequestMessageContentPartImageType.ImageUrl,
              imageUrl: {
                url: "https://unlucky-hydrolyze.biz/",
              },
            },
          ],
          role: ChatCompletionRole.User,
        },
        {
          content: "<value>",
          role: ChatCompletionRole.Tool,
        },
      ],
      model: "gpt-4-turbo",
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
    response: {
      id: "<id>",
      choices: [
        {
          finishReason: FinishReason.Length,
          index: 464385,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Tool,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 4042.65,
                bytes: [
                  857478,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 8108.76,
                    bytes: [
                      501135,
                    ],
                  },
                  {
                    token: "<value>",
                    logprob: 1111.58,
                    bytes: [
                      597129,
                    ],
                  },
                  {
                    token: "<value>",
                    logprob: 3529.33,
                    bytes: [
                      834574,
                      888006,
                      711565,
                    ],
                  },
                ],
              },
              {
                token: "<value>",
                logprob: 5198.81,
                bytes: [
                  549807,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 5143.61,
                    bytes: [
                      72219,
                      151827,
                      342070,
                    ],
                  },
                  {
                    token: "<value>",
                    logprob: 6567.75,
                    bytes: [
                      344620,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.ContentFilter,
          index: 3515,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Assistant,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 9914.64,
                bytes: [
                  627690,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 4888.52,
                    bytes: [
                      984008,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.ContentFilter,
          index: 337902,
          message: {
            content: "<value>",
            role: ChatCompletionRole.User,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 1662.06,
                bytes: [
                  996168,
                  433090,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 2632.08,
                    bytes: [
                      845914,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 652850,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  }, "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import {
  ChatCompletionRequestMessageContentPartImageType,
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  ObjectT,
  Type,
} from "log10ts";
import { Log10Core } from "log10ts/core.js";
import { completionsUpdate } from "log10ts/funcs/completionsUpdate.js";

// Use `Log10Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const log10 = new Log10Core({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await completionsUpdate(log10, {
    organizationId: "<id>",
    kind: Kind.Prompt,
    request: {
      messages: [
        {
          content: [
            {
              type: Type.Text,
              text: "<value>",
            },
            {
              type: ChatCompletionRequestMessageContentPartImageType.ImageUrl,
              imageUrl: {
                url: "https://unlucky-hydrolyze.biz/",
              },
            },
          ],
          role: ChatCompletionRole.User,
        },
        {
          content: "<value>",
          role: ChatCompletionRole.Tool,
        },
      ],
      model: "gpt-4-turbo",
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
    response: {
      id: "<id>",
      choices: [
        {
          finishReason: FinishReason.Length,
          index: 464385,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Tool,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 4042.65,
                bytes: [
                  889838,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 8108.76,
                    bytes: [
                      501135,
                    ],
                  },
                  {
                    token: "<value>",
                    logprob: 1111.58,
                    bytes: [
                      302461,
                    ],
                  },
                  {
                    token: "<value>",
                    logprob: 3529.33,
                    bytes: [
                      834574,
                      888006,
                      711565,
                    ],
                  },
                ],
              },
              {
                token: "<value>",
                logprob: 5198.81,
                bytes: [
                  549807,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 5143.61,
                    bytes: [
                      72219,
                      151827,
                      342070,
                    ],
                  },
                  {
                    token: "<value>",
                    logprob: 6567.75,
                    bytes: [
                      464385,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.ContentFilter,
          index: 3515,
          message: {
            content: "<value>",
            role: ChatCompletionRole.Assistant,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 7712.03,
                bytes: [
                  693508,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 4042.65,
                    bytes: [
                      33980,
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          finishReason: FinishReason.ContentFilter,
          index: 337902,
          message: {
            content: "<value>",
            role: ChatCompletionRole.User,
          },
          logprobs: {
            content: [
              {
                token: "<value>",
                logprob: 1662.06,
                bytes: [
                  996168,
                  433090,
                ],
                topLogprobs: [
                  {
                    token: "<value>",
                    logprob: 2632.08,
                    bytes: [
                      845914,
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      created: 652850,
      model: "gpt-4-turbo",
      object: ObjectT.ChatCompletion,
    },
  }, "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `completionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The completion id to update.                                                                                                                                                   |
| `completion`                                                                                                                                                                   | [models.Completion](../../models/completion.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `xLog10Organization`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateResponse](../../models/updateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

## listUngraded

List ungraded completions i.e. completions that have not been associated with feedback but matches task selector.

### Example Usage

```typescript
import { Log10 } from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await log10.completions.listUngraded();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Log10Core } from "log10ts/core.js";
import { completionsListUngraded } from "log10ts/funcs/completionsListUngraded.js";

// Use `Log10Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const log10 = new Log10Core({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await completionsListUngraded(log10);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xLog10Organization`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListUngradedResponse](../../models/listungradedresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |
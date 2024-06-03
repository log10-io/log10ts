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
  ChatCompletionRequestAssistantMessageRole,
  CreateChatCompletionRequestType,
  Kind,
  Log10,
  Two,
} from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
  xLog10Organization: "<value>",
});

async function run() {
  const result = await log10.completions.create({
    organizationId: "<value>",
    kind: Kind.Chat,
    request: {
      messages: [
          {
            role: ChatCompletionRequestAssistantMessageRole.Assistant,
          },
      ],
    model: Two.Gpt4Turbo,
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
  }, "<value>");

  // Handle the result
  console.log(result)
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


### Response

**Promise\<[models.CreateResponse](../../models/createresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## update

Update completion by id.

### Example Usage

```typescript
import { CreateChatCompletionRequestType, Kind, Log10, Role, Two } from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
  xLog10Organization: "<value>",
});

async function run() {
  const result = await log10.completions.update("<value>", {
    organizationId: "<value>",
    kind: Kind.Prompt,
    request: {
      messages: [
          {
            content: "<value>",
            role: Role.System,
          },
      ],
    model: Two.Gpt4Turbo,
      n: 1,
      responseFormat: {
        type: CreateChatCompletionRequestType.JsonObject,
      },
      temperature: 1,
      topP: 1,
      user: "user-1234",
    },
  }, "<value>");

  // Handle the result
  console.log(result)
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


### Response

**Promise\<[models.UpdateResponse](../../models/updateresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

## listUngraded

List ungraded completions i.e. completions that have not been associated with feedback but matches task selector.

### Example Usage

```typescript
import { Log10 } from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
  xLog10Organization: "<value>",
});

async function run() {
  const result = await log10.completions.listUngraded("<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xLog10Organization`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[models.ListUngradedResponse](../../models/listungradedresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

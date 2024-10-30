# log10ts

<div align="center">
        <img src="https://github.com/log10-io/log10ts/assets/68016351/4359a049-ef26-4e44-b3c7-c194b0545fa5" width="250">
   <p> </p>
   <a href="https://docs.log10.io/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
<a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
</div>

<br></br>
The Log10 typescript library provides convenient access and type safe models for managing requests and responses from the Log10 REST API powered by [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

<!-- Start Summary [summary] -->
## Summary

Log10 Feedback API Spec: Log10 Feedback API Spec
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add log10ts
```

### PNPM

```bash
pnpm add log10ts
```

### Bun

```bash
bun add log10ts
```

### Yarn

```bash
yarn add log10ts zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Log10 } from "log10ts";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await log10.sessions.create();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [completions](docs/sdks/completions/README.md)

* [create](docs/sdks/completions/README.md#create) - Create a completion
* [update](docs/sdks/completions/README.md#update) - Update completion by id.
* [listUngraded](docs/sdks/completions/README.md#listungraded) - List ungraded completions i.e. completions that have not been associated with feedback but matches task selector.

### [feedback](docs/sdks/feedbacksdk/README.md)

* [get](docs/sdks/feedbacksdk/README.md#get) - Fetch feedback by id.
* [upload](docs/sdks/feedbacksdk/README.md#upload) - Upload a piece of feedback

### [feedbackTasks](docs/sdks/feedbacktasks/README.md)

* [list](docs/sdks/feedbacktasks/README.md#list) - List feedback tasks.
* [create](docs/sdks/feedbacktasks/README.md#create) - Create a new task.
* [get](docs/sdks/feedbacktasks/README.md#get) - Retrieves feedback task `taskId`.


### [sessions](docs/sdks/sessions/README.md)

* [create](docs/sdks/sessions/README.md#create) - Create a session

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `models.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `create` method may throw the following errors:

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4XX, 5XX        | \*/\*           |

```typescript
import {
  ChatCompletionRole,
  CreateChatCompletionRequestType,
  FinishReason,
  Kind,
  Log10,
  ObjectT,
} from "log10ts";
import { SDKValidationError } from "log10ts/models";

const log10 = new Log10({
  log10Token: "<YOUR_API_KEY_HERE>",
});

async function run() {
  let result;
  try {
    result = await log10.completions.create({
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
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://log10.io` | None |

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
  serverIdx: 0,
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

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
  serverURL: "https://log10.io",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Log10 } from "log10ts";
import { HTTPClient } from "log10ts/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Log10({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `log10Token` | apiKey       | API key      |

To authenticate with the API the `log10Token` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`completionsCreate`](docs/sdks/completions/README.md#create) - Create a completion
- [`completionsListUngraded`](docs/sdks/completions/README.md#listungraded) - List ungraded completions i.e. completions that have not been associated with feedback but matches task selector.
- [`completionsUpdate`](docs/sdks/completions/README.md#update) - Update completion by id.
- [`feedbackGet`](docs/sdks/feedbacksdk/README.md#get) - Fetch feedback by id.
- [`feedbackTasksCreate`](docs/sdks/feedbacktasks/README.md#create) - Create a new task.
- [`feedbackTasksGet`](docs/sdks/feedbacktasks/README.md#get) - Retrieves feedback task `taskId`.
- [`feedbackTasksList`](docs/sdks/feedbacktasks/README.md#list) - List feedback tasks.
- [`feedbackUpload`](docs/sdks/feedbacksdk/README.md#upload) - Upload a piece of feedback
- [`sessionsCreate`](docs/sdks/sessions/README.md#create) - Create a session

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
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
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Log10 } from "log10ts";

const sdk = new Log10({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
# log10ts

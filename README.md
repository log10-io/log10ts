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

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add log10ts
```

### Yarn

```bash
yarn add log10ts
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
    xLog10Organization: "<value>",
});

async function run() {
    const result = await log10.sessions.create("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [completions](docs/sdks/completions/README.md)

* [create](docs/sdks/completions/README.md#create) - Create a completion
* [update](docs/sdks/completions/README.md#update) - Update completion by id.
* [listUngraded](docs/sdks/completions/README.md#listungraded) - List ungraded completions i.e. completions that have not been associated with feedback but matches task selector.

### [sessions](docs/sdks/sessions/README.md)

* [create](docs/sdks/sessions/README.md#create) - Create a session

### [feedback](docs/sdks/feedbacksdk/README.md)

* [get](docs/sdks/feedbacksdk/README.md#get) - Fetch feedback by id.
* [upload](docs/sdks/feedbacksdk/README.md#upload) - Upload a piece of feedback

### [feedbackTasks](docs/sdks/feedbacktasks/README.md)

* [list](docs/sdks/feedbacktasks/README.md#list) - List feedback tasks.
* [create](docs/sdks/feedbacktasks/README.md#create) - Create a new task.
* [get](docs/sdks/feedbacktasks/README.md#get) - Retrieves feedback task `taskId`.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter must be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `X-Log10-Organization` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `update`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available. The required parameter must be set when you initialize the SDK client.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| xLog10Organization | string | ✔️ | The xLog10Organization parameter. |


### Example

```typescript
import { CreateChatCompletionRequestType, Kind, Log10, Role, Two } from "log10ts";

const log10 = new Log10({
    log10Token: "<YOUR_API_KEY_HERE>",
    xLog10Organization: "<value>",
});

async function run() {
    const result = await log10.completions.update(
        "<value>",
        {
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
        },
        "<value>"
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import {
    ChatCompletionRequestAssistantMessageRole,
    CreateChatCompletionRequestType,
    Kind,
    Log10,
    Two,
} from "log10ts";
import * as errors from "log10ts/models";

const log10 = new Log10({
    log10Token: "<YOUR_API_KEY_HERE>",
    xLog10Organization: "<value>",
});

async function run() {
    let result;
    try {
        result = await log10.completions.create(
            {
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
            },
            "<value>"
        );
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
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

    // Handle the result
    console.log(result);
}

run();

```
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
    ChatCompletionRequestAssistantMessageRole,
    CreateChatCompletionRequestType,
    Kind,
    Log10,
    Two,
} from "log10ts";

const log10 = new Log10({
    serverIdx: 0,
    log10Token: "<YOUR_API_KEY_HERE>",
    xLog10Organization: "<value>",
});

async function run() {
    const result = await log10.completions.create(
        {
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
        },
        "<value>"
    );

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import {
    ChatCompletionRequestAssistantMessageRole,
    CreateChatCompletionRequestType,
    Kind,
    Log10,
    Two,
} from "log10ts";

const log10 = new Log10({
    serverURL: "https://log10.io",
    log10Token: "<YOUR_API_KEY_HERE>",
    xLog10Organization: "<value>",
});

async function run() {
    const result = await log10.completions.create(
        {
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
        },
        "<value>"
    );

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
    const result = await log10.completions.create(
        {
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
        },
        "<value>"
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

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

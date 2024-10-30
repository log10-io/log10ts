/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { Log10Core } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/httpclienterrors.js";
import * as models from "../models/index.js";
import { SDKError } from "../models/sdkerror.js";
import { SDKValidationError } from "../models/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Create a completion
 */
export async function completionsCreate(
  client: Log10Core,
  completion: models.Completion,
  xLog10Organization?: string | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    models.CreateResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: models.CreateRequest = {
    completion: completion,
    xLog10Organization: xLog10Organization,
  };

  const parsed = safeParse(
    input,
    (value) => models.CreateRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.Completion, { explode: true });

  const path = pathToFunc("/api/v1/completions")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Log10-Organization": encodeSimple(
      "X-Log10-Organization",
      payload["X-Log10-Organization"] ?? client._options.xLog10Organization,
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.log10Token);
  const securityInput = secConfig == null ? {} : { log10Token: secConfig };
  const context = {
    operationID: "create",
    oAuth2Scopes: [],
    securitySource: client._options.log10Token,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    models.CreateResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, models.CreateResponse$inboundSchema, { key: "any" }),
    M.json(201, models.CreateResponse$inboundSchema, { key: "Completion" }),
    M.fail(["4XX", "5XX"]),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}

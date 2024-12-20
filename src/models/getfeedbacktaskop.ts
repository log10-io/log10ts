/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "./httpmetadata.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import {
  Task,
  Task$inboundSchema,
  Task$Outbound,
  Task$outboundSchema,
} from "./task.js";

export type GetFeedbackTaskRequest = {
  /**
   * The task id to fetch.
   */
  taskId: string;
};

export type GetFeedbackTaskResponse = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  task?: Task | undefined;
};

/** @internal */
export const GetFeedbackTaskRequest$inboundSchema: z.ZodType<
  GetFeedbackTaskRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  taskId: z.string(),
});

/** @internal */
export type GetFeedbackTaskRequest$Outbound = {
  taskId: string;
};

/** @internal */
export const GetFeedbackTaskRequest$outboundSchema: z.ZodType<
  GetFeedbackTaskRequest$Outbound,
  z.ZodTypeDef,
  GetFeedbackTaskRequest
> = z.object({
  taskId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFeedbackTaskRequest$ {
  /** @deprecated use `GetFeedbackTaskRequest$inboundSchema` instead. */
  export const inboundSchema = GetFeedbackTaskRequest$inboundSchema;
  /** @deprecated use `GetFeedbackTaskRequest$outboundSchema` instead. */
  export const outboundSchema = GetFeedbackTaskRequest$outboundSchema;
  /** @deprecated use `GetFeedbackTaskRequest$Outbound` instead. */
  export type Outbound = GetFeedbackTaskRequest$Outbound;
}

export function getFeedbackTaskRequestToJSON(
  getFeedbackTaskRequest: GetFeedbackTaskRequest,
): string {
  return JSON.stringify(
    GetFeedbackTaskRequest$outboundSchema.parse(getFeedbackTaskRequest),
  );
}

export function getFeedbackTaskRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetFeedbackTaskRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFeedbackTaskRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFeedbackTaskRequest' from JSON`,
  );
}

/** @internal */
export const GetFeedbackTaskResponse$inboundSchema: z.ZodType<
  GetFeedbackTaskResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Task: Task$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Task": "task",
  });
});

/** @internal */
export type GetFeedbackTaskResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Task?: Task$Outbound | undefined;
};

/** @internal */
export const GetFeedbackTaskResponse$outboundSchema: z.ZodType<
  GetFeedbackTaskResponse$Outbound,
  z.ZodTypeDef,
  GetFeedbackTaskResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  task: Task$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    task: "Task",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFeedbackTaskResponse$ {
  /** @deprecated use `GetFeedbackTaskResponse$inboundSchema` instead. */
  export const inboundSchema = GetFeedbackTaskResponse$inboundSchema;
  /** @deprecated use `GetFeedbackTaskResponse$outboundSchema` instead. */
  export const outboundSchema = GetFeedbackTaskResponse$outboundSchema;
  /** @deprecated use `GetFeedbackTaskResponse$Outbound` instead. */
  export type Outbound = GetFeedbackTaskResponse$Outbound;
}

export function getFeedbackTaskResponseToJSON(
  getFeedbackTaskResponse: GetFeedbackTaskResponse,
): string {
  return JSON.stringify(
    GetFeedbackTaskResponse$outboundSchema.parse(getFeedbackTaskResponse),
  );
}

export function getFeedbackTaskResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetFeedbackTaskResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFeedbackTaskResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFeedbackTaskResponse' from JSON`,
  );
}

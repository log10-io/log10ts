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

export type CreateFeedbackTaskResponse = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  task?: Task | undefined;
};

/** @internal */
export const CreateFeedbackTaskResponse$inboundSchema: z.ZodType<
  CreateFeedbackTaskResponse,
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
export type CreateFeedbackTaskResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Task?: Task$Outbound | undefined;
};

/** @internal */
export const CreateFeedbackTaskResponse$outboundSchema: z.ZodType<
  CreateFeedbackTaskResponse$Outbound,
  z.ZodTypeDef,
  CreateFeedbackTaskResponse
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
export namespace CreateFeedbackTaskResponse$ {
  /** @deprecated use `CreateFeedbackTaskResponse$inboundSchema` instead. */
  export const inboundSchema = CreateFeedbackTaskResponse$inboundSchema;
  /** @deprecated use `CreateFeedbackTaskResponse$outboundSchema` instead. */
  export const outboundSchema = CreateFeedbackTaskResponse$outboundSchema;
  /** @deprecated use `CreateFeedbackTaskResponse$Outbound` instead. */
  export type Outbound = CreateFeedbackTaskResponse$Outbound;
}

export function createFeedbackTaskResponseToJSON(
  createFeedbackTaskResponse: CreateFeedbackTaskResponse,
): string {
  return JSON.stringify(
    CreateFeedbackTaskResponse$outboundSchema.parse(createFeedbackTaskResponse),
  );
}

export function createFeedbackTaskResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateFeedbackTaskResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFeedbackTaskResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFeedbackTaskResponse' from JSON`,
  );
}

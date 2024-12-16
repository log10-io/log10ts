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

export type ListFeedbackTasksResponse = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  tasks?: Array<Task> | undefined;
};

/** @internal */
export const ListFeedbackTasksResponse$inboundSchema: z.ZodType<
  ListFeedbackTasksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Tasks: z.array(Task$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Tasks": "tasks",
  });
});

/** @internal */
export type ListFeedbackTasksResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Tasks?: Array<Task$Outbound> | undefined;
};

/** @internal */
export const ListFeedbackTasksResponse$outboundSchema: z.ZodType<
  ListFeedbackTasksResponse$Outbound,
  z.ZodTypeDef,
  ListFeedbackTasksResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  tasks: z.array(Task$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    tasks: "Tasks",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFeedbackTasksResponse$ {
  /** @deprecated use `ListFeedbackTasksResponse$inboundSchema` instead. */
  export const inboundSchema = ListFeedbackTasksResponse$inboundSchema;
  /** @deprecated use `ListFeedbackTasksResponse$outboundSchema` instead. */
  export const outboundSchema = ListFeedbackTasksResponse$outboundSchema;
  /** @deprecated use `ListFeedbackTasksResponse$Outbound` instead. */
  export type Outbound = ListFeedbackTasksResponse$Outbound;
}

export function listFeedbackTasksResponseToJSON(
  listFeedbackTasksResponse: ListFeedbackTasksResponse,
): string {
  return JSON.stringify(
    ListFeedbackTasksResponse$outboundSchema.parse(listFeedbackTasksResponse),
  );
}

export function listFeedbackTasksResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListFeedbackTasksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListFeedbackTasksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListFeedbackTasksResponse' from JSON`,
  );
}

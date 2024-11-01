/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";

/**
 * The values of the feedback. Must be valid JSON according to the task schema.
 */
export type JsonValues = {};

export type Feedback = {
  /**
   * The unique identifier for this feedback.
   */
  id?: string | undefined;
  /**
   * The epoch this schema was created.
   */
  createdAtMs?: number | undefined;
  /**
   * The unique identifier for the task associated with this feedback.
   */
  taskId: string;
  /**
   * The values of the feedback. Must be valid JSON according to the task schema.
   */
  jsonValues: JsonValues;
  /**
   * The matched completion ids associated with this feedback.
   */
  matchedCompletionIds: Array<string>;
  /**
   * The comment associated with this feedback.
   */
  comment: string;
  completionsSummary?: string | undefined;
};

/** @internal */
export const JsonValues$inboundSchema: z.ZodType<
  JsonValues,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type JsonValues$Outbound = {};

/** @internal */
export const JsonValues$outboundSchema: z.ZodType<
  JsonValues$Outbound,
  z.ZodTypeDef,
  JsonValues
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JsonValues$ {
  /** @deprecated use `JsonValues$inboundSchema` instead. */
  export const inboundSchema = JsonValues$inboundSchema;
  /** @deprecated use `JsonValues$outboundSchema` instead. */
  export const outboundSchema = JsonValues$outboundSchema;
  /** @deprecated use `JsonValues$Outbound` instead. */
  export type Outbound = JsonValues$Outbound;
}

/** @internal */
export const Feedback$inboundSchema: z.ZodType<
  Feedback,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  created_at_ms: z.number().optional(),
  task_id: z.string(),
  json_values: z.lazy(() => JsonValues$inboundSchema),
  matched_completion_ids: z.array(z.string()),
  comment: z.string(),
  completions_summary: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at_ms": "createdAtMs",
    "task_id": "taskId",
    "json_values": "jsonValues",
    "matched_completion_ids": "matchedCompletionIds",
    "completions_summary": "completionsSummary",
  });
});

/** @internal */
export type Feedback$Outbound = {
  id?: string | undefined;
  created_at_ms?: number | undefined;
  task_id: string;
  json_values: JsonValues$Outbound;
  matched_completion_ids: Array<string>;
  comment: string;
  completions_summary?: string | undefined;
};

/** @internal */
export const Feedback$outboundSchema: z.ZodType<
  Feedback$Outbound,
  z.ZodTypeDef,
  Feedback
> = z.object({
  id: z.string().optional(),
  createdAtMs: z.number().optional(),
  taskId: z.string(),
  jsonValues: z.lazy(() => JsonValues$outboundSchema),
  matchedCompletionIds: z.array(z.string()),
  comment: z.string(),
  completionsSummary: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAtMs: "created_at_ms",
    taskId: "task_id",
    jsonValues: "json_values",
    matchedCompletionIds: "matched_completion_ids",
    completionsSummary: "completions_summary",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Feedback$ {
  /** @deprecated use `Feedback$inboundSchema` instead. */
  export const inboundSchema = Feedback$inboundSchema;
  /** @deprecated use `Feedback$outboundSchema` instead. */
  export const outboundSchema = Feedback$outboundSchema;
  /** @deprecated use `Feedback$Outbound` instead. */
  export type Outbound = Feedback$Outbound;
}

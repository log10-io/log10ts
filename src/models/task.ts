/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

/**
 * The schema of the task. Must be valid JSON Schema.
 */
export type JsonSchema = {};

/**
 * The completion tag matching with this task i.e. surfaced as needing feedback.
 */
export type CompletionTagsSelector = {};

export type Task = {
    /**
     * The unique identifier for this task.
     */
    id?: string | undefined;
    /**
     * The epoch this schema was created.
     */
    createdAtMs?: number | undefined;
    /**
     * The schema of the task. Must be valid JSON Schema.
     */
    jsonSchema: JsonSchema;
    /**
     * The name of the task.
     */
    name: string;
    /**
     * The instructions for this task.
     */
    instruction: string;
    /**
     * The completion tag matching with this task i.e. surfaced as needing feedback.
     */
    completionTagsSelector: CompletionTagsSelector;
};

/** @internal */
export namespace JsonSchema$ {
    export const inboundSchema: z.ZodType<JsonSchema, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JsonSchema> = z.object({});
}

/** @internal */
export namespace CompletionTagsSelector$ {
    export const inboundSchema: z.ZodType<CompletionTagsSelector, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompletionTagsSelector> =
        z.object({});
}

/** @internal */
export namespace Task$ {
    export const inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            created_at_ms: z.number().optional(),
            json_schema: z.lazy(() => JsonSchema$.inboundSchema),
            name: z.string(),
            instruction: z.string(),
            completion_tags_selector: z.lazy(() => CompletionTagsSelector$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                created_at_ms: "createdAtMs",
                json_schema: "jsonSchema",
                completion_tags_selector: "completionTagsSelector",
            });
        });

    export type Outbound = {
        id?: string | undefined;
        created_at_ms?: number | undefined;
        json_schema: JsonSchema$.Outbound;
        name: string;
        instruction: string;
        completion_tags_selector: CompletionTagsSelector$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Task> = z
        .object({
            id: z.string().optional(),
            createdAtMs: z.number().optional(),
            jsonSchema: z.lazy(() => JsonSchema$.outboundSchema),
            name: z.string(),
            instruction: z.string(),
            completionTagsSelector: z.lazy(() => CompletionTagsSelector$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                createdAtMs: "created_at_ms",
                jsonSchema: "json_schema",
                completionTagsSelector: "completion_tags_selector",
            });
        });
}

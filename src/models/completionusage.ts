/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import * as z from "zod";

/**
 * Usage statistics for the completion request.
 */
export type CompletionUsage = {
    /**
     * Number of tokens in the generated completion.
     */
    completionTokens: number;
    /**
     * Number of tokens in the prompt.
     */
    promptTokens: number;
    /**
     * Total number of tokens used in the request (prompt + completion).
     */
    totalTokens: number;
};

/** @internal */
export namespace CompletionUsage$ {
    export const inboundSchema: z.ZodType<CompletionUsage, z.ZodTypeDef, unknown> = z
        .object({
            completion_tokens: z.number().int(),
            prompt_tokens: z.number().int(),
            total_tokens: z.number().int(),
        })
        .transform((v) => {
            return remap$(v, {
                completion_tokens: "completionTokens",
                prompt_tokens: "promptTokens",
                total_tokens: "totalTokens",
            });
        });

    export type Outbound = {
        completion_tokens: number;
        prompt_tokens: number;
        total_tokens: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompletionUsage> = z
        .object({
            completionTokens: z.number().int(),
            promptTokens: z.number().int(),
            totalTokens: z.number().int(),
        })
        .transform((v) => {
            return remap$(v, {
                completionTokens: "completion_tokens",
                promptTokens: "prompt_tokens",
                totalTokens: "total_tokens",
            });
        });
}

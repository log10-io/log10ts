/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
 *
 * @remarks
 *
 */
export type ChatCompletionFunctionCallOption = {
    /**
     * The name of the function to call.
     */
    name: string;
};

/** @internal */
export namespace ChatCompletionFunctionCallOption$ {
    export const inboundSchema: z.ZodType<ChatCompletionFunctionCallOption, z.ZodTypeDef, unknown> =
        z
            .object({
                name: z.string(),
            })
            .transform((v) => {
                return {
                    name: v.name,
                };
            });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ChatCompletionFunctionCallOption
    > = z
        .object({
            name: z.string(),
        })
        .transform((v) => {
            return {
                name: v.name,
            };
        });
}

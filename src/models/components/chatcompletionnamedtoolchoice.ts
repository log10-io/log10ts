/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of the tool. Currently, only `function` is supported.
 */
export enum ChatCompletionNamedToolChoiceType {
    Function = "function",
}

export type ChatCompletionNamedToolChoiceFunction = {
    /**
     * The name of the function to call.
     */
    name: string;
};

/**
 * Specifies a tool the model should use. Use to force the model to call a specific function.
 */
export type ChatCompletionNamedToolChoice = {
    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    type: ChatCompletionNamedToolChoiceType;
    function: ChatCompletionNamedToolChoiceFunction;
};

/** @internal */
export namespace ChatCompletionNamedToolChoiceType$ {
    export const inboundSchema = z.nativeEnum(ChatCompletionNamedToolChoiceType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChatCompletionNamedToolChoiceFunction$ {
    export const inboundSchema: z.ZodType<
        ChatCompletionNamedToolChoiceFunction,
        z.ZodTypeDef,
        unknown
    > = z
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
        ChatCompletionNamedToolChoiceFunction
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

/** @internal */
export namespace ChatCompletionNamedToolChoice$ {
    export const inboundSchema: z.ZodType<ChatCompletionNamedToolChoice, z.ZodTypeDef, unknown> = z
        .object({
            type: ChatCompletionNamedToolChoiceType$.inboundSchema,
            function: z.lazy(() => ChatCompletionNamedToolChoiceFunction$.inboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                function: v.function,
            };
        });

    export type Outbound = {
        type: string;
        function: ChatCompletionNamedToolChoiceFunction$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatCompletionNamedToolChoice> =
        z
            .object({
                type: ChatCompletionNamedToolChoiceType$.outboundSchema,
                function: z.lazy(() => ChatCompletionNamedToolChoiceFunction$.outboundSchema),
            })
            .transform((v) => {
                return {
                    type: v.type,
                    function: v.function,
                };
            });
}

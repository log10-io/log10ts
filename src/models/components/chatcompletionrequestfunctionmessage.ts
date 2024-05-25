/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The role of the messages author, in this case `function`.
 */
export enum ChatCompletionRequestFunctionMessageRole {
    Function = "function",
}

/**
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type ChatCompletionRequestFunctionMessage = {
    /**
     * The role of the messages author, in this case `function`.
     */
    role: ChatCompletionRequestFunctionMessageRole;
    /**
     * The contents of the function message.
     */
    content: string | null;
    /**
     * The name of the function to call.
     */
    name: string;
};

/** @internal */
export namespace ChatCompletionRequestFunctionMessageRole$ {
    export const inboundSchema = z.nativeEnum(ChatCompletionRequestFunctionMessageRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChatCompletionRequestFunctionMessage$ {
    export const inboundSchema: z.ZodType<
        ChatCompletionRequestFunctionMessage,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            role: ChatCompletionRequestFunctionMessageRole$.inboundSchema,
            content: z.nullable(z.string()),
            name: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                content: v.content,
                name: v.name,
            };
        });

    export type Outbound = {
        role: string;
        content: string | null;
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ChatCompletionRequestFunctionMessage
    > = z
        .object({
            role: ChatCompletionRequestFunctionMessageRole$.outboundSchema,
            content: z.nullable(z.string()),
            name: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                content: v.content,
                name: v.name,
            };
        });
}

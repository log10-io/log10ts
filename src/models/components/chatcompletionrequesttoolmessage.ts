/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The role of the messages author, in this case `tool`.
 */
export enum ChatCompletionRequestToolMessageRole {
    Tool = "tool",
}

export type ChatCompletionRequestToolMessage = {
    /**
     * The role of the messages author, in this case `tool`.
     */
    role: ChatCompletionRequestToolMessageRole;
    /**
     * The contents of the tool message.
     */
    content: string;
    /**
     * Tool call that this message is responding to.
     */
    toolCallId: string;
};

/** @internal */
export namespace ChatCompletionRequestToolMessageRole$ {
    export const inboundSchema = z.nativeEnum(ChatCompletionRequestToolMessageRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChatCompletionRequestToolMessage$ {
    export const inboundSchema: z.ZodType<ChatCompletionRequestToolMessage, z.ZodTypeDef, unknown> =
        z
            .object({
                role: ChatCompletionRequestToolMessageRole$.inboundSchema,
                content: z.string(),
                tool_call_id: z.string(),
            })
            .transform((v) => {
                return {
                    role: v.role,
                    content: v.content,
                    toolCallId: v.tool_call_id,
                };
            });

    export type Outbound = {
        role: string;
        content: string;
        tool_call_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ChatCompletionRequestToolMessage
    > = z
        .object({
            role: ChatCompletionRequestToolMessageRole$.outboundSchema,
            content: z.string(),
            toolCallId: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                content: v.content,
                tool_call_id: v.toolCallId,
            };
        });
}

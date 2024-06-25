/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { ChatCompletionRole, ChatCompletionRole$ } from "./chatcompletionrole.js";
import * as z from "zod";

export type ChatCompletionRequestToolMessage = {
    /**
     * The role of the author of a message
     */
    role: ChatCompletionRole;
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
export namespace ChatCompletionRequestToolMessage$ {
    export const inboundSchema: z.ZodType<ChatCompletionRequestToolMessage, z.ZodTypeDef, unknown> =
        z
            .object({
                role: ChatCompletionRole$.inboundSchema,
                content: z.string(),
                tool_call_id: z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    tool_call_id: "toolCallId",
                });
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
            role: ChatCompletionRole$.outboundSchema,
            content: z.string(),
            toolCallId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                toolCallId: "tool_call_id",
            });
        });
}

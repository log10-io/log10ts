/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The role of the author of a message
 */
export enum ChatCompletionRole {
    System = "system",
    User = "user",
    Assistant = "assistant",
    Tool = "tool",
    Function = "function",
}

/** @internal */
export const ChatCompletionRole$inboundSchema: z.ZodNativeEnum<typeof ChatCompletionRole> =
    z.nativeEnum(ChatCompletionRole);

/** @internal */
export const ChatCompletionRole$outboundSchema: z.ZodNativeEnum<typeof ChatCompletionRole> =
    ChatCompletionRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRole$ {
    /** @deprecated use `ChatCompletionRole$inboundSchema` instead. */
    export const inboundSchema = ChatCompletionRole$inboundSchema;
    /** @deprecated use `ChatCompletionRole$outboundSchema` instead. */
    export const outboundSchema = ChatCompletionRole$outboundSchema;
}

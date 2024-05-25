/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ChatCompletionNamedToolChoice,
    ChatCompletionNamedToolChoice$,
} from "./chatcompletionnamedtoolchoice";
import * as z from "zod";

/**
 * `none` means the model will not call any tool and instead generates a message. `auto` means the model can pick between generating a message or calling one or more tools. `required` means the model must call one or more tools.
 *
 * @remarks
 *
 */
export enum ChatCompletionToolChoiceOption1 {
    None = "none",
    Auto = "auto",
    Required = "required",
}

/**
 * Controls which (if any) tool is called by the model.
 *
 * @remarks
 * `none` means the model will not call any tool and instead generates a message.
 * `auto` means the model can pick between generating a message or calling one or more tools.
 * `required` means the model must call one or more tools.
 * Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
 *
 * `none` is the default when no tools are present. `auto` is the default if tools are present.
 *
 */
export type ChatCompletionToolChoiceOption =
    | ChatCompletionNamedToolChoice
    | ChatCompletionToolChoiceOption1;

/** @internal */
export namespace ChatCompletionToolChoiceOption1$ {
    export const inboundSchema = z.nativeEnum(ChatCompletionToolChoiceOption1);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChatCompletionToolChoiceOption$ {
    export const inboundSchema: z.ZodType<ChatCompletionToolChoiceOption, z.ZodTypeDef, unknown> =
        z.union([
            ChatCompletionNamedToolChoice$.inboundSchema,
            ChatCompletionToolChoiceOption1$.inboundSchema,
        ]);

    export type Outbound = ChatCompletionNamedToolChoice$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatCompletionToolChoiceOption> =
        z.union([
            ChatCompletionNamedToolChoice$.outboundSchema,
            ChatCompletionToolChoiceOption1$.outboundSchema,
        ]);
}

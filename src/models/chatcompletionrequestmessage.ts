/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ChatCompletionRequestAssistantMessage,
    ChatCompletionRequestAssistantMessage$,
} from "./chatcompletionrequestassistantmessage.js";
import {
    ChatCompletionRequestFunctionMessage,
    ChatCompletionRequestFunctionMessage$,
} from "./chatcompletionrequestfunctionmessage.js";
import {
    ChatCompletionRequestSystemMessage,
    ChatCompletionRequestSystemMessage$,
} from "./chatcompletionrequestsystemmessage.js";
import {
    ChatCompletionRequestToolMessage,
    ChatCompletionRequestToolMessage$,
} from "./chatcompletionrequesttoolmessage.js";
import {
    ChatCompletionRequestUserMessage,
    ChatCompletionRequestUserMessage$,
} from "./chatcompletionrequestusermessage.js";
import * as z from "zod";

export type ChatCompletionRequestMessage =
    | ChatCompletionRequestSystemMessage
    | ChatCompletionRequestUserMessage
    | ChatCompletionRequestToolMessage
    | ChatCompletionRequestFunctionMessage
    | ChatCompletionRequestAssistantMessage;

/** @internal */
export namespace ChatCompletionRequestMessage$ {
    export const inboundSchema: z.ZodType<ChatCompletionRequestMessage, z.ZodTypeDef, unknown> =
        z.union([
            ChatCompletionRequestSystemMessage$.inboundSchema,
            ChatCompletionRequestUserMessage$.inboundSchema,
            ChatCompletionRequestToolMessage$.inboundSchema,
            ChatCompletionRequestFunctionMessage$.inboundSchema,
            ChatCompletionRequestAssistantMessage$.inboundSchema,
        ]);

    export type Outbound =
        | ChatCompletionRequestSystemMessage$.Outbound
        | ChatCompletionRequestUserMessage$.Outbound
        | ChatCompletionRequestToolMessage$.Outbound
        | ChatCompletionRequestFunctionMessage$.Outbound
        | ChatCompletionRequestAssistantMessage$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatCompletionRequestMessage> =
        z.union([
            ChatCompletionRequestSystemMessage$.outboundSchema,
            ChatCompletionRequestUserMessage$.outboundSchema,
            ChatCompletionRequestToolMessage$.outboundSchema,
            ChatCompletionRequestFunctionMessage$.outboundSchema,
            ChatCompletionRequestAssistantMessage$.outboundSchema,
        ]);
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import {
  ChatCompletionRole,
  ChatCompletionRole$inboundSchema,
  ChatCompletionRole$outboundSchema,
} from "./chatcompletionrole.js";

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
export const ChatCompletionRequestToolMessage$inboundSchema: z.ZodType<
  ChatCompletionRequestToolMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  role: ChatCompletionRole$inboundSchema,
  content: z.string(),
  tool_call_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "tool_call_id": "toolCallId",
  });
});

/** @internal */
export type ChatCompletionRequestToolMessage$Outbound = {
  role: string;
  content: string;
  tool_call_id: string;
};

/** @internal */
export const ChatCompletionRequestToolMessage$outboundSchema: z.ZodType<
  ChatCompletionRequestToolMessage$Outbound,
  z.ZodTypeDef,
  ChatCompletionRequestToolMessage
> = z.object({
  role: ChatCompletionRole$outboundSchema,
  content: z.string(),
  toolCallId: z.string(),
}).transform((v) => {
  return remap$(v, {
    toolCallId: "tool_call_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestToolMessage$ {
  /** @deprecated use `ChatCompletionRequestToolMessage$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionRequestToolMessage$inboundSchema;
  /** @deprecated use `ChatCompletionRequestToolMessage$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionRequestToolMessage$outboundSchema;
  /** @deprecated use `ChatCompletionRequestToolMessage$Outbound` instead. */
  export type Outbound = ChatCompletionRequestToolMessage$Outbound;
}

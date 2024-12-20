/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
 *
 * @remarks
 */
export type ChatCompletionFunctionCallOption = {
  /**
   * The name of the function to call.
   */
  name: string;
};

/** @internal */
export const ChatCompletionFunctionCallOption$inboundSchema: z.ZodType<
  ChatCompletionFunctionCallOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type ChatCompletionFunctionCallOption$Outbound = {
  name: string;
};

/** @internal */
export const ChatCompletionFunctionCallOption$outboundSchema: z.ZodType<
  ChatCompletionFunctionCallOption$Outbound,
  z.ZodTypeDef,
  ChatCompletionFunctionCallOption
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionFunctionCallOption$ {
  /** @deprecated use `ChatCompletionFunctionCallOption$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionFunctionCallOption$inboundSchema;
  /** @deprecated use `ChatCompletionFunctionCallOption$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionFunctionCallOption$outboundSchema;
  /** @deprecated use `ChatCompletionFunctionCallOption$Outbound` instead. */
  export type Outbound = ChatCompletionFunctionCallOption$Outbound;
}

export function chatCompletionFunctionCallOptionToJSON(
  chatCompletionFunctionCallOption: ChatCompletionFunctionCallOption,
): string {
  return JSON.stringify(
    ChatCompletionFunctionCallOption$outboundSchema.parse(
      chatCompletionFunctionCallOption,
    ),
  );
}

export function chatCompletionFunctionCallOptionFromJSON(
  jsonString: string,
): SafeParseResult<ChatCompletionFunctionCallOption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatCompletionFunctionCallOption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatCompletionFunctionCallOption' from JSON`,
  );
}

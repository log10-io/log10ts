/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  FunctionObject,
  FunctionObject$inboundSchema,
  FunctionObject$Outbound,
  FunctionObject$outboundSchema,
} from "./functionobject.js";

/**
 * The type of the tool. Currently, only `function` is supported.
 */
export enum ChatCompletionToolType {
  Function = "function",
}

export type ChatCompletionTool = {
  /**
   * The type of the tool. Currently, only `function` is supported.
   */
  type: ChatCompletionToolType;
  function: FunctionObject;
};

/** @internal */
export const ChatCompletionToolType$inboundSchema: z.ZodNativeEnum<
  typeof ChatCompletionToolType
> = z.nativeEnum(ChatCompletionToolType);

/** @internal */
export const ChatCompletionToolType$outboundSchema: z.ZodNativeEnum<
  typeof ChatCompletionToolType
> = ChatCompletionToolType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionToolType$ {
  /** @deprecated use `ChatCompletionToolType$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionToolType$inboundSchema;
  /** @deprecated use `ChatCompletionToolType$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionToolType$outboundSchema;
}

/** @internal */
export const ChatCompletionTool$inboundSchema: z.ZodType<
  ChatCompletionTool,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ChatCompletionToolType$inboundSchema,
  function: FunctionObject$inboundSchema,
});

/** @internal */
export type ChatCompletionTool$Outbound = {
  type: string;
  function: FunctionObject$Outbound;
};

/** @internal */
export const ChatCompletionTool$outboundSchema: z.ZodType<
  ChatCompletionTool$Outbound,
  z.ZodTypeDef,
  ChatCompletionTool
> = z.object({
  type: ChatCompletionToolType$outboundSchema,
  function: FunctionObject$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionTool$ {
  /** @deprecated use `ChatCompletionTool$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionTool$inboundSchema;
  /** @deprecated use `ChatCompletionTool$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionTool$outboundSchema;
  /** @deprecated use `ChatCompletionTool$Outbound` instead. */
  export type Outbound = ChatCompletionTool$Outbound;
}

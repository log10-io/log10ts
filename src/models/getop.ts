/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import {
  Feedback,
  Feedback$inboundSchema,
  Feedback$Outbound,
  Feedback$outboundSchema,
} from "./feedback.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "./httpmetadata.js";

export type GetGlobals = {
  xLog10Organization?: string | undefined;
};

export type GetRequest = {
  /**
   * The feedback id to fetch.
   */
  feedbackId: string;
  xLog10Organization?: string | undefined;
};

export type GetResponse = {
  httpMeta: HTTPMetadata;
  /**
   * OK
   */
  feedback?: Feedback | undefined;
};

/** @internal */
export const GetGlobals$inboundSchema: z.ZodType<
  GetGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Log10-Organization": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "X-Log10-Organization": "xLog10Organization",
  });
});

/** @internal */
export type GetGlobals$Outbound = {
  "X-Log10-Organization"?: string | undefined;
};

/** @internal */
export const GetGlobals$outboundSchema: z.ZodType<
  GetGlobals$Outbound,
  z.ZodTypeDef,
  GetGlobals
> = z.object({
  xLog10Organization: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xLog10Organization: "X-Log10-Organization",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGlobals$ {
  /** @deprecated use `GetGlobals$inboundSchema` instead. */
  export const inboundSchema = GetGlobals$inboundSchema;
  /** @deprecated use `GetGlobals$outboundSchema` instead. */
  export const outboundSchema = GetGlobals$outboundSchema;
  /** @deprecated use `GetGlobals$Outbound` instead. */
  export type Outbound = GetGlobals$Outbound;
}

/** @internal */
export const GetRequest$inboundSchema: z.ZodType<
  GetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  feedbackId: z.string(),
  "X-Log10-Organization": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "X-Log10-Organization": "xLog10Organization",
  });
});

/** @internal */
export type GetRequest$Outbound = {
  feedbackId: string;
  "X-Log10-Organization"?: string | undefined;
};

/** @internal */
export const GetRequest$outboundSchema: z.ZodType<
  GetRequest$Outbound,
  z.ZodTypeDef,
  GetRequest
> = z.object({
  feedbackId: z.string(),
  xLog10Organization: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xLog10Organization: "X-Log10-Organization",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRequest$ {
  /** @deprecated use `GetRequest$inboundSchema` instead. */
  export const inboundSchema = GetRequest$inboundSchema;
  /** @deprecated use `GetRequest$outboundSchema` instead. */
  export const outboundSchema = GetRequest$outboundSchema;
  /** @deprecated use `GetRequest$Outbound` instead. */
  export type Outbound = GetRequest$Outbound;
}

/** @internal */
export const GetResponse$inboundSchema: z.ZodType<
  GetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  Feedback: Feedback$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Feedback": "feedback",
  });
});

/** @internal */
export type GetResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  Feedback?: Feedback$Outbound | undefined;
};

/** @internal */
export const GetResponse$outboundSchema: z.ZodType<
  GetResponse$Outbound,
  z.ZodTypeDef,
  GetResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  feedback: Feedback$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    feedback: "Feedback",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetResponse$ {
  /** @deprecated use `GetResponse$inboundSchema` instead. */
  export const inboundSchema = GetResponse$inboundSchema;
  /** @deprecated use `GetResponse$outboundSchema` instead. */
  export const outboundSchema = GetResponse$outboundSchema;
  /** @deprecated use `GetResponse$Outbound` instead. */
  export type Outbound = GetResponse$Outbound;
}

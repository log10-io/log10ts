/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "./httpmetadata.js";
import {
  Session,
  Session$inboundSchema,
  Session$Outbound,
  Session$outboundSchema,
} from "./session.js";

export type CreateSessionGlobals = {
  xLog10Organization?: string | undefined;
};

export type CreateSessionRequest = {
  xLog10Organization?: string | undefined;
};

/**
 * Created
 */
export type CreateSessionResponseBody = {
  session?: Session | undefined;
};

export type CreateSessionResponse = {
  httpMeta: HTTPMetadata;
  /**
   * Created
   */
  object?: CreateSessionResponseBody | undefined;
};

/** @internal */
export const CreateSessionGlobals$inboundSchema: z.ZodType<
  CreateSessionGlobals,
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
export type CreateSessionGlobals$Outbound = {
  "X-Log10-Organization"?: string | undefined;
};

/** @internal */
export const CreateSessionGlobals$outboundSchema: z.ZodType<
  CreateSessionGlobals$Outbound,
  z.ZodTypeDef,
  CreateSessionGlobals
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
export namespace CreateSessionGlobals$ {
  /** @deprecated use `CreateSessionGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateSessionGlobals$inboundSchema;
  /** @deprecated use `CreateSessionGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateSessionGlobals$outboundSchema;
  /** @deprecated use `CreateSessionGlobals$Outbound` instead. */
  export type Outbound = CreateSessionGlobals$Outbound;
}

/** @internal */
export const CreateSessionRequest$inboundSchema: z.ZodType<
  CreateSessionRequest,
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
export type CreateSessionRequest$Outbound = {
  "X-Log10-Organization"?: string | undefined;
};

/** @internal */
export const CreateSessionRequest$outboundSchema: z.ZodType<
  CreateSessionRequest$Outbound,
  z.ZodTypeDef,
  CreateSessionRequest
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
export namespace CreateSessionRequest$ {
  /** @deprecated use `CreateSessionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateSessionRequest$inboundSchema;
  /** @deprecated use `CreateSessionRequest$outboundSchema` instead. */
  export const outboundSchema = CreateSessionRequest$outboundSchema;
  /** @deprecated use `CreateSessionRequest$Outbound` instead. */
  export type Outbound = CreateSessionRequest$Outbound;
}

/** @internal */
export const CreateSessionResponseBody$inboundSchema: z.ZodType<
  CreateSessionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  session: Session$inboundSchema.optional(),
});

/** @internal */
export type CreateSessionResponseBody$Outbound = {
  session?: Session$Outbound | undefined;
};

/** @internal */
export const CreateSessionResponseBody$outboundSchema: z.ZodType<
  CreateSessionResponseBody$Outbound,
  z.ZodTypeDef,
  CreateSessionResponseBody
> = z.object({
  session: Session$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionResponseBody$ {
  /** @deprecated use `CreateSessionResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateSessionResponseBody$inboundSchema;
  /** @deprecated use `CreateSessionResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateSessionResponseBody$outboundSchema;
  /** @deprecated use `CreateSessionResponseBody$Outbound` instead. */
  export type Outbound = CreateSessionResponseBody$Outbound;
}

/** @internal */
export const CreateSessionResponse$inboundSchema: z.ZodType<
  CreateSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: HTTPMetadata$inboundSchema,
  object: z.lazy(() => CreateSessionResponseBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
  });
});

/** @internal */
export type CreateSessionResponse$Outbound = {
  HttpMeta: HTTPMetadata$Outbound;
  object?: CreateSessionResponseBody$Outbound | undefined;
};

/** @internal */
export const CreateSessionResponse$outboundSchema: z.ZodType<
  CreateSessionResponse$Outbound,
  z.ZodTypeDef,
  CreateSessionResponse
> = z.object({
  httpMeta: HTTPMetadata$outboundSchema,
  object: z.lazy(() => CreateSessionResponseBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionResponse$ {
  /** @deprecated use `CreateSessionResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSessionResponse$inboundSchema;
  /** @deprecated use `CreateSessionResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSessionResponse$outboundSchema;
  /** @deprecated use `CreateSessionResponse$Outbound` instead. */
  export type Outbound = CreateSessionResponse$Outbound;
}

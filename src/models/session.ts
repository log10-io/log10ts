/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Session = {
    /**
     * The unique identifier for this session.
     */
    id?: string | undefined;
};

/** @internal */
export const Session$inboundSchema: z.ZodType<Session, z.ZodTypeDef, unknown> = z.object({
    id: z.string().optional(),
});

/** @internal */
export type Session$Outbound = {
    id?: string | undefined;
};

/** @internal */
export const Session$outboundSchema: z.ZodType<Session$Outbound, z.ZodTypeDef, Session> = z.object({
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Session$ {
    /** @deprecated use `Session$inboundSchema` instead. */
    export const inboundSchema = Session$inboundSchema;
    /** @deprecated use `Session$outboundSchema` instead. */
    export const outboundSchema = Session$outboundSchema;
    /** @deprecated use `Session$Outbound` instead. */
    export type Outbound = Session$Outbound;
}

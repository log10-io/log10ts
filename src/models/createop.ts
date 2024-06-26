/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../lib/primitives.js";
import { Completion, Completion$ } from "./completion.js";
import { HTTPMetadata, HTTPMetadata$ } from "./httpmetadata.js";
import * as z from "zod";

export type CreateGlobals = {
    xLog10Organization?: string | undefined;
};

export type CreateRequest = {
    xLog10Organization?: string | undefined;
    completion: Completion;
};

export type CreateResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Created
     */
    any?: any | undefined;
    /**
     * Created
     */
    completion?: Completion | undefined;
};

/** @internal */
export namespace CreateGlobals$ {
    export const inboundSchema: z.ZodType<CreateGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "X-Log10-Organization": "xLog10Organization",
            });
        });

    export type Outbound = {
        "X-Log10-Organization"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateGlobals> = z
        .object({
            xLog10Organization: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xLog10Organization: "X-Log10-Organization",
            });
        });
}

/** @internal */
export namespace CreateRequest$ {
    export const inboundSchema: z.ZodType<CreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string().optional(),
            Completion: Completion$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "X-Log10-Organization": "xLog10Organization",
                Completion: "completion",
            });
        });

    export type Outbound = {
        "X-Log10-Organization"?: string | undefined;
        Completion: Completion$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRequest> = z
        .object({
            xLog10Organization: z.string().optional(),
            completion: Completion$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xLog10Organization: "X-Log10-Organization",
                completion: "Completion",
            });
        });
}

/** @internal */
export namespace CreateResponse$ {
    export const inboundSchema: z.ZodType<CreateResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: HTTPMetadata$.inboundSchema,
            any: z.any().optional(),
            Completion: Completion$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Completion: "completion",
            });
        });

    export type Outbound = {
        HttpMeta: HTTPMetadata$.Outbound;
        any?: any | undefined;
        Completion?: Completion$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateResponse> = z
        .object({
            httpMeta: HTTPMetadata$.outboundSchema,
            any: z.any().optional(),
            completion: Completion$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                completion: "Completion",
            });
        });
}

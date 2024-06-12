/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type UpdateGlobals = {
    xLog10Organization: string;
};

export type UpdateRequest = {
    /**
     * The completion id to update.
     */
    completionId: string;
    xLog10Organization?: string | undefined;
    completion: components.Completion;
};

export type UpdateResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    completion?: components.Completion | undefined;
};

/** @internal */
export namespace UpdateGlobals$ {
    export const inboundSchema: z.ZodType<UpdateGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "X-Log10-Organization": "xLog10Organization",
            });
        });

    export type Outbound = {
        "X-Log10-Organization": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateGlobals> = z
        .object({
            xLog10Organization: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                xLog10Organization: "X-Log10-Organization",
            });
        });
}

/** @internal */
export namespace UpdateRequest$ {
    export const inboundSchema: z.ZodType<UpdateRequest, z.ZodTypeDef, unknown> = z
        .object({
            completionId: z.string(),
            "X-Log10-Organization": z.string().optional(),
            Completion: components.Completion$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "X-Log10-Organization": "xLog10Organization",
                Completion: "completion",
            });
        });

    export type Outbound = {
        completionId: string;
        "X-Log10-Organization"?: string | undefined;
        Completion: components.Completion$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateRequest> = z
        .object({
            completionId: z.string(),
            xLog10Organization: z.string().optional(),
            completion: components.Completion$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xLog10Organization: "X-Log10-Organization",
                completion: "Completion",
            });
        });
}

/** @internal */
export namespace UpdateResponse$ {
    export const inboundSchema: z.ZodType<UpdateResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Completion: components.Completion$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Completion: "completion",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Completion?: components.Completion$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            completion: components.Completion$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                completion: "Completion",
            });
        });
}

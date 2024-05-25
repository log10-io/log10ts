/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListUngradedGlobals = {
    xLog10Organization: string;
};

export type ListUngradedRequest = {
    xLog10Organization?: string | undefined;
};

/**
 * OK
 */
export type ListUngradedResponseBody = {
    completions?: Array<components.Completion> | undefined;
};

export type ListUngradedResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    object?: ListUngradedResponseBody | undefined;
};

/** @internal */
export namespace ListUngradedGlobals$ {
    export const inboundSchema: z.ZodType<ListUngradedGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string(),
        })
        .transform((v) => {
            return {
                xLog10Organization: v["X-Log10-Organization"],
            };
        });

    export type Outbound = {
        "X-Log10-Organization": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListUngradedGlobals> = z
        .object({
            xLog10Organization: z.string(),
        })
        .transform((v) => {
            return {
                "X-Log10-Organization": v.xLog10Organization,
            };
        });
}

/** @internal */
export namespace ListUngradedRequest$ {
    export const inboundSchema: z.ZodType<ListUngradedRequest, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v["X-Log10-Organization"] === undefined
                    ? null
                    : { xLog10Organization: v["X-Log10-Organization"] }),
            };
        });

    export type Outbound = {
        "X-Log10-Organization"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListUngradedRequest> = z
        .object({
            xLog10Organization: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.xLog10Organization === undefined
                    ? null
                    : { "X-Log10-Organization": v.xLog10Organization }),
            };
        });
}

/** @internal */
export namespace ListUngradedResponseBody$ {
    export const inboundSchema: z.ZodType<ListUngradedResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            completions: z.array(components.Completion$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.completions === undefined ? null : { completions: v.completions }),
            };
        });

    export type Outbound = {
        completions?: Array<components.Completion$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListUngradedResponseBody> = z
        .object({
            completions: z.array(components.Completion$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.completions === undefined ? null : { completions: v.completions }),
            };
        });
}

/** @internal */
export namespace ListUngradedResponse$ {
    export const inboundSchema: z.ZodType<ListUngradedResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => ListUngradedResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: ListUngradedResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListUngradedResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => ListUngradedResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}

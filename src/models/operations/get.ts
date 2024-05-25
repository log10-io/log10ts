/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetGlobals = {
    xLog10Organization: string;
};

export type GetRequest = {
    /**
     * The feedback id to fetch.
     */
    feedbackId: string;
    xLog10Organization?: string | undefined;
};

export type GetResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    feedback?: components.Feedback | undefined;
};

/** @internal */
export namespace GetGlobals$ {
    export const inboundSchema: z.ZodType<GetGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGlobals> = z
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
export namespace GetRequest$ {
    export const inboundSchema: z.ZodType<GetRequest, z.ZodTypeDef, unknown> = z
        .object({
            feedbackId: z.string(),
            "X-Log10-Organization": z.string().optional(),
        })
        .transform((v) => {
            return {
                feedbackId: v.feedbackId,
                ...(v["X-Log10-Organization"] === undefined
                    ? null
                    : { xLog10Organization: v["X-Log10-Organization"] }),
            };
        });

    export type Outbound = {
        feedbackId: string;
        "X-Log10-Organization"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRequest> = z
        .object({
            feedbackId: z.string(),
            xLog10Organization: z.string().optional(),
        })
        .transform((v) => {
            return {
                feedbackId: v.feedbackId,
                ...(v.xLog10Organization === undefined
                    ? null
                    : { "X-Log10-Organization": v.xLog10Organization }),
            };
        });
}

/** @internal */
export namespace GetResponse$ {
    export const inboundSchema: z.ZodType<GetResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Feedback: components.Feedback$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Feedback === undefined ? null : { feedback: v.Feedback }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Feedback?: components.Feedback$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            feedback: components.Feedback$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.feedback === undefined ? null : { Feedback: v.feedback }),
            };
        });
}
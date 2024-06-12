/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type Security = {
    log10Token?: string | undefined;
};

/** @internal */
export namespace Security$ {
    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z
        .object({
            Log10Token: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                Log10Token: "log10Token",
            });
        });

    export type Outbound = {
        Log10Token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z
        .object({
            log10Token: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                log10Token: "Log10Token",
            });
        });
}

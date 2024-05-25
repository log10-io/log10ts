/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListFeedbackTasksResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    tasks?: Array<components.Task> | undefined;
};

/** @internal */
export namespace ListFeedbackTasksResponse$ {
    export const inboundSchema: z.ZodType<ListFeedbackTasksResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Tasks: z.array(components.Task$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Tasks === undefined ? null : { tasks: v.Tasks }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Tasks?: Array<components.Task$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListFeedbackTasksResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            tasks: z.array(components.Task$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.tasks === undefined ? null : { Tasks: v.tasks }),
            };
        });
}

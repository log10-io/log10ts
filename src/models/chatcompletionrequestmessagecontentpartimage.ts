/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";

/**
 * The type of the content part.
 */
export enum ChatCompletionRequestMessageContentPartImageType {
  ImageUrl = "image_url",
}

/**
 * Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding).
 */
export enum Detail {
  Auto = "auto",
  Low = "low",
  High = "high",
}

export type ImageUrl = {
  /**
   * Either a URL of the image or the base64 encoded image data.
   */
  url: string;
  /**
   * Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding).
   */
  detail?: Detail | undefined;
};

export type ChatCompletionRequestMessageContentPartImage = {
  /**
   * The type of the content part.
   */
  type: ChatCompletionRequestMessageContentPartImageType;
  imageUrl: ImageUrl;
};

/** @internal */
export const ChatCompletionRequestMessageContentPartImageType$inboundSchema:
  z.ZodNativeEnum<typeof ChatCompletionRequestMessageContentPartImageType> = z
    .nativeEnum(ChatCompletionRequestMessageContentPartImageType);

/** @internal */
export const ChatCompletionRequestMessageContentPartImageType$outboundSchema:
  z.ZodNativeEnum<typeof ChatCompletionRequestMessageContentPartImageType> =
    ChatCompletionRequestMessageContentPartImageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestMessageContentPartImageType$ {
  /** @deprecated use `ChatCompletionRequestMessageContentPartImageType$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionRequestMessageContentPartImageType$inboundSchema;
  /** @deprecated use `ChatCompletionRequestMessageContentPartImageType$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionRequestMessageContentPartImageType$outboundSchema;
}

/** @internal */
export const Detail$inboundSchema: z.ZodNativeEnum<typeof Detail> = z
  .nativeEnum(Detail);

/** @internal */
export const Detail$outboundSchema: z.ZodNativeEnum<typeof Detail> =
  Detail$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Detail$ {
  /** @deprecated use `Detail$inboundSchema` instead. */
  export const inboundSchema = Detail$inboundSchema;
  /** @deprecated use `Detail$outboundSchema` instead. */
  export const outboundSchema = Detail$outboundSchema;
}

/** @internal */
export const ImageUrl$inboundSchema: z.ZodType<
  ImageUrl,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  detail: Detail$inboundSchema.default(Detail.Auto),
});

/** @internal */
export type ImageUrl$Outbound = {
  url: string;
  detail: string;
};

/** @internal */
export const ImageUrl$outboundSchema: z.ZodType<
  ImageUrl$Outbound,
  z.ZodTypeDef,
  ImageUrl
> = z.object({
  url: z.string(),
  detail: Detail$outboundSchema.default(Detail.Auto),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImageUrl$ {
  /** @deprecated use `ImageUrl$inboundSchema` instead. */
  export const inboundSchema = ImageUrl$inboundSchema;
  /** @deprecated use `ImageUrl$outboundSchema` instead. */
  export const outboundSchema = ImageUrl$outboundSchema;
  /** @deprecated use `ImageUrl$Outbound` instead. */
  export type Outbound = ImageUrl$Outbound;
}

/** @internal */
export const ChatCompletionRequestMessageContentPartImage$inboundSchema:
  z.ZodType<
    ChatCompletionRequestMessageContentPartImage,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: ChatCompletionRequestMessageContentPartImageType$inboundSchema,
    image_url: z.lazy(() => ImageUrl$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "image_url": "imageUrl",
    });
  });

/** @internal */
export type ChatCompletionRequestMessageContentPartImage$Outbound = {
  type: string;
  image_url: ImageUrl$Outbound;
};

/** @internal */
export const ChatCompletionRequestMessageContentPartImage$outboundSchema:
  z.ZodType<
    ChatCompletionRequestMessageContentPartImage$Outbound,
    z.ZodTypeDef,
    ChatCompletionRequestMessageContentPartImage
  > = z.object({
    type: ChatCompletionRequestMessageContentPartImageType$outboundSchema,
    imageUrl: z.lazy(() => ImageUrl$outboundSchema),
  }).transform((v) => {
    return remap$(v, {
      imageUrl: "image_url",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionRequestMessageContentPartImage$ {
  /** @deprecated use `ChatCompletionRequestMessageContentPartImage$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionRequestMessageContentPartImage$inboundSchema;
  /** @deprecated use `ChatCompletionRequestMessageContentPartImage$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionRequestMessageContentPartImage$outboundSchema;
  /** @deprecated use `ChatCompletionRequestMessageContentPartImage$Outbound` instead. */
  export type Outbound = ChatCompletionRequestMessageContentPartImage$Outbound;
}

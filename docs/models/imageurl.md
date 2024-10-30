# ImageUrl

## Example Usage

```typescript
import { ImageUrl } from "log10ts";

let value: ImageUrl = {
  url: "https://glass-pigpen.com",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                    | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Either a URL of the image or the base64 encoded image data.                                                                              |
| `detail`                                                                                                                                 | [models.Detail](../models/detail.md)                                                                                                     | :heavy_minus_sign:                                                                                                                       | Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding). |
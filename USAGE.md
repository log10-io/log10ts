<!-- Start SDK Example Usage [usage] -->
```typescript
import { Log10 } from "log10ts";

const log10 = new Log10({
    log10Token: "<YOUR_API_KEY_HERE>",
    xLog10Organization: "<value>",
});

async function run() {
    const result = await log10.sessions.create("<value>");

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
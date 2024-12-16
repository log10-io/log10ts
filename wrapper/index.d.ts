import { SDKOptions } from "..";
declare class Log10Wrapper {
    private readonly options$;
    private readonly tags;
    constructor(options?: SDKOptions, tags?: string[]);
    imageTransformFragment: (fragment: any) => any;
    imageTransformMessage: (message: any) => any;
    logCompletion(completion: any): Promise<void>;
    wrappedResponse(response: any, request: any): AsyncGenerator<any, void, unknown>;
    wrap(client: any): void;
    wrappedBedrockResponse(response: any, request: any): AsyncGenerator<any, void, unknown>;
    wrapBedrock(client: any): void;
}
export { Log10Wrapper };
//# sourceMappingURL=index.d.ts.map
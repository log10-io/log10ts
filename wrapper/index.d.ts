import { SDKOptions } from "..";
declare class Log10Wrapper {
    private readonly options$;
    private readonly tags;
    constructor(options?: SDKOptions, tags?: string[]);
    logCompletion(completion: any): Promise<void>;
    createFeedbackTask(taskSchema: any, name: string): Promise<string>;
    createFeedback(taskId: string, values: any, completionTagsSelector: string[]): Promise<void>;
    wrap(client: any): void;
}
export { Log10Wrapper };
//# sourceMappingURL=index.d.ts.map
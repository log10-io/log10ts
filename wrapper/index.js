"use strict";
// log10.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log10Wrapper = void 0;
const axios_1 = __importDefault(require("axios"));
const hooks_1 = require("../hooks/hooks");
class Log10Wrapper {
    constructor(options = {}, tags) {
        this.tags = [];
        const opt = options;
        let hooks;
        if (typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof hooks_1.SDKHooks) {
            hooks = opt.hooks;
        }
        else {
            hooks = new hooks_1.SDKHooks();
        }
        this.options$ = { ...options, hooks };
        this.tags = tags || [];
        void this.options$;
    }
    async logCompletion(completion) {
        try {
            const response = await axios_1.default.post(`${this.options$.serverURL}/api/v1/completions`, {
                ...completion,
                organization_id: this.options$.xLog10Organization,
                kind: "chat",
                status: "finished",
                tags: this.tags || [],
            }, {
                headers: {
                    "x-log10-token": typeof this.options$.log10Token === "function"
                        ? await this.options$.log10Token()
                        : this.options$.log10Token,
                    "x-log10-organization": this.options$.xLog10Organization,
                    "Content-Type": "application/json",
                },
            });
            console.log("Completion logged successfully:", response.data);
        }
        catch (error) {
            console.error("Error logging completion:", error);
        }
    }
    async createFeedbackTask(taskSchema, name) {
        try {
            const response = await axios_1.default.post(`${this.options$.serverURL}/api/v1/feedback_task`, {
                json_schema: taskSchema,
                name: name,
                organization_id: this.options$.xLog10Organization,
            }, {
                headers: {
                    "x-log10-token": typeof this.options$.log10Token === "function"
                        ? await this.options$.log10Token()
                        : this.options$.log10Token,
                    "x-log10-organization": this.options$.xLog10Organization,
                    "Content-Type": "application/json",
                },
            });
            return response.data.id;
        }
        catch (error) {
            console.error("Error creating feedback task:", error);
            throw error;
        }
    }
    async createFeedback(taskId, values, completionTagsSelector) {
        try {
            await axios_1.default.post(`${this.options$.serverURL}/api/v1/feedback`, {
                task_id: taskId,
                json_values: values,
                completion_tags_selector: completionTagsSelector,
                organization_id: this.options$.xLog10Organization,
            }, {
                headers: {
                    "x-log10-token": typeof this.options$.log10Token === "function"
                        ? await this.options$.log10Token()
                        : this.options$.log10Token,
                    "x-log10-organization": this.options$.xLog10Organization,
                    "Content-Type": "application/json",
                },
            });
        }
        catch (error) {
            console.error("Error creating feedback:", error);
            throw error;
        }
    }
    wrap(client) {
        const ref = client.chat.completions.create;
        client.chat.completions.create = async (...args) => {
            const response = await ref.call(client.chat.completions, ...args);
            this.logCompletion({
                request: args[0],
                response: { ...response, system_fingerprint: "" },
            });
            return response;
        };
    }
}
exports.Log10Wrapper = Log10Wrapper;
//# sourceMappingURL=index.js.map
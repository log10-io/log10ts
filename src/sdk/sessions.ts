/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";

export class Sessions extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create a session
     */
    async create(
        xLog10Organization?: string | undefined,
        options?: RequestOptions
    ): Promise<models.CreateSessionResponse> {
        const input$: models.CreateSessionRequest = {
            xLog10Organization: xLog10Organization,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => models.CreateSessionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/api/v1/sessions")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
            "X-Log10-Organization": encodeSimple$(
                "X-Log10-Organization",
                payload$["X-Log10-Organization"] ?? this.options$.xLog10Organization,
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.log10Token === "function") {
            security$ = { log10Token: await this.options$.log10Token() };
        } else if (this.options$.log10Token) {
            security$ = { log10Token: this.options$.log10Token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createSession",
            oAuth2Scopes: [],
            securitySource: this.options$.log10Token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<models.CreateSessionResponse>()
            .json(201, models.CreateSessionResponse$inboundSchema, { key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}

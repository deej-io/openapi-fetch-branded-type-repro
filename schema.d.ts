
// Branded primitive types — injected via transform hook in generate.ts
export type UserId = string & { __brand: "UserId" };
export type UserScore = number & { __brand: "UserScore" };
export type UserTag = string & { __brand: "UserTag" };

export type $Read<T> = {
    readonly $read: T;
};
export type $Write<T> = {
    readonly $write: T;
};
export type Readable<T> = T extends $Write<any> ? never : T extends $Read<infer U> ? Readable<U> : T extends (infer E)[] ? Readable<E>[] : T extends object ? {
    [K in keyof T as NonNullable<T[K]> extends $Write<any> ? never : K]: Readable<T[K]>;
} : T;
export type Writable<T> = T extends $Read<any> ? never : T extends $Write<infer U> ? Writable<U> : T extends (infer E)[] ? Writable<E>[] : T extends object ? {
    [K in keyof T as NonNullable<T[K]> extends $Read<any> ? never : K]: Writable<T[K]>;
} & {
    [K in keyof T as NonNullable<T[K]> extends $Read<any> ? K : never]?: never;
} : T;
export interface paths {
    "/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["createUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        User: {
            id: $Read<UserId>;
            name: string;
            score?: $Read<UserScore>;
            tag?: UserTag;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A user */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    createUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["User"];
            };
        };
        responses: {
            /** @description Created user */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
}

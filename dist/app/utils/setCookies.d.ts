import { Response } from "express";
export interface AuthTokens {
    accessToken?: string;
}
export declare const setAuthCookie: (res: Response, tokenInfo: AuthTokens) => void;
//# sourceMappingURL=setCookies.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthCookie = void 0;
const env_1 = require("../config/env");
const setAuthCookie = (res, tokenInfo) => {
    if (tokenInfo.accessToken) {
        res.cookie("accessToken", tokenInfo.accessToken, {
            httpOnly: true,
            secure: env_1.envVars.ENVAIRONMENT === "production",
            sameSite: env_1.envVars.ENVAIRONMENT === "production" ? "none" : "lax",
            maxAge: 24 * 60 * 60 * 1000,
            path: "/",
        });
    }
};
exports.setAuthCookie = setAuthCookie;
//# sourceMappingURL=setCookies.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthCookie = void 0;
const env_1 = require("../config/env");
const setAuthCookie = (res, tokenInfo) => {
    if (tokenInfo.accessToken) {
        const isProduction = env_1.envVars.ENVAIRONMENT === 'production';
        console.log(env_1.envVars.ENVAIRONMENT);
        res.cookie("accessToken", tokenInfo.accessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'none' : 'lax',
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
        });
    }
};
exports.setAuthCookie = setAuthCookie;
//# sourceMappingURL=setCookies.js.map
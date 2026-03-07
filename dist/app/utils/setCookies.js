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
<<<<<<< HEAD
            secure: env_1.envVars.ENVAIRONMENT === "production",
            sameSite: env_1.envVars.ENVAIRONMENT === "production" ? "none" : "lax",
            maxAge: 24 * 60 * 60 * 1000,
            path: "/",
=======
            secure: isProduction,
            sameSite: isProduction ? 'none' : 'lax',
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
>>>>>>> 607dd2935f064727d558d2f0bf72e242d1a30dad
        });
    }
};
exports.setAuthCookie = setAuthCookie;
//# sourceMappingURL=setCookies.js.map
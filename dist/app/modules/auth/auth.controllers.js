"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const setCookies_1 = require("../../utils/setCookies");
const auth_services_1 = require("./auth.services");
const env_1 = require("../../config/env");
const credentialsLogin = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { user, accessToken } = await auth_services_1.AuthServices.credentialsLogin(req.body);
    (0, setCookies_1.setAuthCookie)(res, { accessToken });
    const { email, role, name } = user;
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "User Logged In Successfully",
        data: {
            accessToken: accessToken,
            user: { email, role, name },
        },
    });
});
const logout = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    console.log(env_1.envVars);
    const isProduction = env_1.envVars.ENVAIRONMENT === 'production';
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
        maxAge: 24 * 60 * 60 * 1000,
        path: '/',
    });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.default.OK,
        message: "User Logged Out Successfully!",
        data: null,
    });
});
exports.AuthControllers = {
    credentialsLogin,
    logout,
};
//# sourceMappingURL=auth.controllers.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const AppError_1 = __importDefault(require("../helpers/AppError"));
const env_1 = require("../config/env");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const jwt_1 = require("../utils/jwt");
const user_model_1 = require("../modules/user/user.model");
const checkAuth = (...roles) => async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken || req.headers.authorization;
        if (!accessToken) {
            throw new AppError_1.default(403, 'Missing Access Token');
        }
        const verifiedToken = (0, jwt_1.verifyToken)(accessToken, env_1.envVars.JWT_ACCESS_SECRET);
        if (!verifiedToken) {
            throw new AppError_1.default(403, 'You are not authorized');
        }
        const isUserExist = await user_model_1.User.findOne({ email: verifiedToken.email });
        if (!isUserExist) {
            throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "User does not exist");
        }
        verifiedToken.role = isUserExist.role;
        if (!roles.includes(verifiedToken.role)) {
            throw new AppError_1.default(403, "You are not permitted to this route!!!");
        }
        req.user = verifiedToken;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map
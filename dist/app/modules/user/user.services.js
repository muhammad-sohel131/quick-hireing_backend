"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const env_1 = require("../../config/env");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = require("./user.model");
const createUser = async (payload) => {
    const { email, password, role } = payload;
    const hashPassword = await bcryptjs_1.default.hash(password, Number(env_1.envVars.BCRYPT_SALT_ROUND));
    const user = await user_model_1.User.create({
        email: email,
        password: hashPassword,
        role: role,
    });
    return user;
};
const getMe = async (userId) => {
    const updatedUser = await user_model_1.User.findById(userId).select("-password");
    return updatedUser;
};
exports.userServices = {
    createUser,
    getMe,
};
//# sourceMappingURL=user.services.js.map
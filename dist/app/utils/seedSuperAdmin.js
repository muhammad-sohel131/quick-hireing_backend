"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSuperAdmin = void 0;
const env_1 = require("../config/env");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = require("../modules/user/user.model");
const user_interface_1 = require("../modules/user/user.interface");
const seedSuperAdmin = async () => {
    try {
        const isSuperAdminExist = await user_model_1.User.findOne({
            email: env_1.envVars.SUPER_ADMIN_EMAIL,
        });
        if (isSuperAdminExist) {
            console.log("Super Admin already exist");
            return;
        }
        console.log("Super Admin is being created now....");
        const hashedPassword = await bcryptjs_1.default.hash(env_1.envVars.SUPER_ADMIN_PASSWORD, Number(env_1.envVars.BCRYPT_SALT_ROUND));
        const payload = {
            name: "Super Admin",
            role: user_interface_1.Role.SUPER_ADMIN,
            email: env_1.envVars.SUPER_ADMIN_EMAIL,
            password: hashedPassword,
        };
        const superAdmin = await user_model_1.User.create(payload);
        console.log("Super Admin is created successfully\n");
        console.log(superAdmin);
    }
    catch (err) {
        console.log(err);
    }
};
exports.seedSuperAdmin = seedSuperAdmin;
//# sourceMappingURL=seedSuperAdmin.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("./user.interface");
const user_controllers_1 = require("./user.controllers");
const route = (0, express_1.Router)();
route.get("/me", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), user_controllers_1.userController.getMe);
route.post("/register", user_controllers_1.userController.createUser);
exports.userRoutes = route;
//# sourceMappingURL=user.routes.js.map
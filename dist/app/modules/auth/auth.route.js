"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("./auth.controllers");
const route = (0, express_1.Router)();
route.post("/login", auth_controllers_1.AuthControllers.credentialsLogin);
route.post("/logout", auth_controllers_1.AuthControllers.logout);
exports.authRoutes = route;
//# sourceMappingURL=auth.route.js.map
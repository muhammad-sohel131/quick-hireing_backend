"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsApplicationRoutes = void 0;
const express_1 = require("express");
const applications_controllers_1 = require("./applications.controllers");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../user/user.interface");
const route = (0, express_1.Router)();
route.post("/", applications_controllers_1.jobApplicationController.createJobApplication);
route.get("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), applications_controllers_1.jobApplicationController.getJobApplications);
exports.jobsApplicationRoutes = route;
//# sourceMappingURL=applications.routes.js.map
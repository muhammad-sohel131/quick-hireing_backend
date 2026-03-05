"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../user/user.interface");
const jobs_controllers_1 = require("./jobs.controllers");
const route = (0, express_1.Router)();
route.get("/", jobs_controllers_1.jobController.getJobs);
route.post("/", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), jobs_controllers_1.jobController.createJob);
route.delete("/:id", (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), jobs_controllers_1.jobController.deleteJobById);
route.get("/:id", jobs_controllers_1.jobController.getJobById);
exports.jobsRoutes = route;
//# sourceMappingURL=jobs.routes.js.map
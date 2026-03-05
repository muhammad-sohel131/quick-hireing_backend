"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("../modules/user/user.routes");
const auth_route_1 = require("../modules/auth/auth.route");
const jobs_routes_1 = require("../modules/jobs/jobs.routes");
const applications_routes_1 = require("../modules/applications/applications.routes");
const router = (0, express_1.Router)();
router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is healthy",
    });
});
const moduleRoutes = [
    {
        path: '/user',
        route: user_routes_1.userRoutes
    },
    {
        path: '/auth',
        route: auth_route_1.authRoutes
    },
    {
        path: '/jobs',
        route: jobs_routes_1.jobsRoutes
    },
    {
        path: '/applications',
        route: applications_routes_1.jobsApplicationRoutes
    }
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});
exports.default = router;
//# sourceMappingURL=index.js.map
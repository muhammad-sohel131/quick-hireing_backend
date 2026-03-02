import { Router, Request, Response } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.route";
import { jobsRoutes } from "../modules/jobs/jobs.routes";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/jobs',
        route: jobsRoutes
    },
    // {
    //     path: '/applications',
    //     route: 
    // }
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
})

export default router;
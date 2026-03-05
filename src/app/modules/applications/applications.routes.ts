import { Router } from "express";
import { jobApplicationController } from "./applications.controllers";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";


const route = Router();
route.post("/", jobApplicationController.createJobApplication);
route.get("/", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), jobApplicationController.getJobApplications);


export const jobsApplicationRoutes = route;

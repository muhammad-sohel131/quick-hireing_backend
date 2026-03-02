import { Router } from "express";
import { jobApplicationController } from "./applications.controllers";


const route = Router();
route.post("/", jobApplicationController.createJobApplication);


export const jobsApplicationRoutes = route;

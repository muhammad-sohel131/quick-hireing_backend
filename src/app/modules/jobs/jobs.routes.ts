import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { jobController } from "./jobs.controllers";

const route = Router();

route.get("/", jobController.getJobs);
route.post("/", checkAuth(...Object.values(Role)), jobController.createJob);
route.delete(
  "/:id",
  checkAuth(...Object.values(Role)),
  jobController.deleteJobById,
);
route.get("/:id", jobController.getJobById);

export const jobsRoutes = route;

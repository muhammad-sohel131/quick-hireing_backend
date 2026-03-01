import { Request, Response, Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";
import { userController } from "./user.controllers";

const route = Router();

route.get("/me", checkAuth(...Object.values(Role)), userController.getMe);
route.post("/register", userController.createUser);
export const userRoutes = route;

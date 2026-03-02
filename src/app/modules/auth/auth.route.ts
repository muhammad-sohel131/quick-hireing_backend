import { Router } from "express";
import { AuthControllers } from "./auth.controllers";

const route = Router();

route.post("/login", AuthControllers.credentialsLogin);
route.post("/logout", AuthControllers.logout);




export const authRoutes = route;
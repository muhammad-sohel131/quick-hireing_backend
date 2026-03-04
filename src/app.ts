import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./app/routes";
import { envVars } from "./app/config/env";

const app: Application = express();
app.use(cookieParser());
// middlewares
app.use(cors({
    origin: envVars.FRONTEND_URL,
    credentials: true
}))

app.use(express.json());

// routes
app.use("/api", routes);

export default app;
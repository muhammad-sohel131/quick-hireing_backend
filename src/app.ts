import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./app/routes";
import { envVars } from "./app/config/env";
import { globalErrorHandle } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";

const app: Application = express();
app.use(cookieParser());
// middlewares
app.use(
  cors({
    origin: envVars.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());

// routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Quick Hiring API",
  });
})
app.use("/api", routes);

app.use(globalErrorHandle);
app.use(notFound)
export default app;

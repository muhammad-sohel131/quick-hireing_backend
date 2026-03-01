import express, { Application } from "express";
import cors from "cors";
import routes from "./app/routes";

const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", routes);

export default app;
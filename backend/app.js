import express from "express";
import { config } from "dotenv";
import cors from "cors";
import studentRouter from "./routers/studentRouter.js";


const app = express();
config({path: "./config/config.env"});

app.use("/api/v1/students", studentRouter);

export default app;
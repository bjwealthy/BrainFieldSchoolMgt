import express from "express";
import { config } from "dotenv";
import cors from "cors";
import studentRouter from "./routers/studentRouter.js";
import router from "./routers/eventsRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();

app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
})


config({path: "./config/config.env"});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/events", router);

dbConnection();

export default app;
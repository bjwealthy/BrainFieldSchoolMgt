import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import studentsRouter from "./routers/studentsRouter.js";
import teachersRouter from "./routers/teachersRouter.js";
import assignmentsRouter from "./routers/assignmentsRouter.js";
import announcementsRouter from "./routers/announcementsRouter.js";
import attendanceRouter from "./routers/attendanceRouter.js";
import classRouter from "./routers/classRouter.js";
import eventsRouter from "./routers/eventsRouter.js";
import libraryRouter from "./routers/libraryRouter.js";
import examsRouter from "./routers/examsRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();

config({path: "./config/config.env"});
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Disposition"],
    optionsSuccessStatus: 200,
    preflightContinue: false,
    maxAge: 86400, // 24 hours  
    credentials: true,
}));

app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
})


config({path: "./config/config.env"});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/students", studentsRouter);
app.use("/api/v1/teacchers", teachersRouter);
app.use("/api/v1/assignments", assignmentsRouter);
app.use("/api/v1/announcements", announcementsRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/classes", classRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/exams", examsRouter);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found!"
    });
});     

dbConnection();

export default app;
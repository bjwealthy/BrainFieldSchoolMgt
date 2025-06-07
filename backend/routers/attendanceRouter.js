import express from "express";
import { markAttendance, getAllAttendance } from "../controllers/attendanceController";

const router = express.Router();

router.get('/getall', getAllAttendance);
router.post('/', markAttendance);
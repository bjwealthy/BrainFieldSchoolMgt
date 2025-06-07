import express from "express";  
import { createAnnouncements, getAllAnnouncements } from "../controllers/announcementController.js";
import { Announcement } from "../models/announcementSchema.js";

const router = express.Router();

// Create a new student
router.post("/", createAnnouncements);
// Get all students
router.get("/getall", getAllAnnouncements);




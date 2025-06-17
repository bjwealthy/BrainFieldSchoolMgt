import express from "express";  
import { createTeacher, getAllTeachers, updateTeacher, deleteTeacher} from "../controllers/teacherController.js";
import Teacher from "../models/teacherSchema.js"; // Import the Teacher model

const teachersRouter = express.Router();

// Create a new teacher
teachersRouter.post("/", createTeacher);
// Get all Teacher
teachersRouter.get("/getall", getAllTeachers);
// Update a Teacher
teachersRouter.put("/:id", updateTeacher);
// Delete a Teacher
teachersRouter.delete("/:id", deleteTeacher);
// Get a Teacher by ID      
teachersRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const teacher = await Teacher.findById(id);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            });
        }
        res.status(200).json({
            success: true,
            teacher,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


export default teachersRouter;

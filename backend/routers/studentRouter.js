import express from "express";  
import { createStudent, getAllStudents, getStudentByGrade, updateStudent, deleteStudent, getStudentByRegistrationNumber} from "../controllers/studentController.js";
import Student from "../models/studentSchema.js"; // Import the Student model

const router = express.Router();

// Create a new student
router.post("/", createStudent);
// Get all students
router.get("/getall", getAllStudents);
// Get a student by registration number
router.get("/getByReg/:registrationNumber", getStudentByRegistrationNumber);
// Get a student by grade
router.get("/getByGrade/:grade", getStudentByGrade);  
// Update a student
router.put("/:id", updateStudent);
// Delete a student
router.delete("/:id", deleteStudent);
// Get a student by ID      
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }
        res.status(200).json({
            success: true,
            student,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


export default router;

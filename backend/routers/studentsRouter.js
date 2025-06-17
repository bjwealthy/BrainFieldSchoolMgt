import express from "express";  
import { createStudent, getAllStudents, getStudentByGrade, updateStudent, deleteStudent, getStudentByRegistrationNumber} from "../controllers/studentController.js";
import Student from "../models/studentSchema.js"; // Import the Student model

const studentsRouter = express.Router();

// Create a new student
studentsRouter.post("/", createStudent);
// Get all students
studentsRouter.get("/getall", getAllStudents);
// Get a student by registration number
studentsRouter.get("/getByReg/:registrationNumber", getStudentByRegistrationNumber);
// Get a student by grade
studentsRouter.get("/getByGrade/:grade", getStudentByGrade);  
// Update a student
studentsRouter.put("/:id", updateStudent);
// Delete a student
studentsRouter.delete("/:id", deleteStudent);
// Get a student by ID      
studentsRouter.get("/:id", async (req, res) => {
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


export default studentsRouter;

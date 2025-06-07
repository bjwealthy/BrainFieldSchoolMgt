import express from "express";  
import { createEvents, getAllEvents} from "../controllers/eventsController.js";
import Student from "../models/studentSchema.js"; // Import the Student model

const router = express.Router();

// Create a new student
router.post("/", createEvents);
// Get all students
router.get("/getall", getAllEvents);









// // Get a student by registration number
// router.get("/getStudentEventByReg/:registrationNumber", getStudentEventByRegistrationNumber);
// // Get a student by grade
// router.get("/getStudentEventByGrade/:grade", getStudentEventByGrade);  
// // Update a student
// router.put("/:id", updateStudentEvent);
// // Delete a student
// router.delete("/:id", deleteStudentEvent);
// // Get a student by ID      
// router.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const student = await Student.findById(id);
//         if (!student) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Student not found",
//             });
//         }
//         res.status(200).json({
//             success: true,
//             student,
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// });


export default router;

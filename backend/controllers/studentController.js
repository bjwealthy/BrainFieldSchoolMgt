import { Student } from "../models/studentSchema.js";

export const createStudent = async (req, res) => {
    const { name, registrationNumber, grade } = req.body;
    
    try {
        const student = await Student.create({
        name,
        registrationNumber,
        grade,
        });
    
        res.status(201).json({
        success: true,
        student,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
        });
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
    
        res.status(200).json({
        success: true,
        students,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
        });
    }
}

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, registrationNumber, grade } = req.body;
    
    try {
        const student = await Student.findByIdAndUpdate(
            id,
            { name, registrationNumber, grade },
            { new: true }
        );
    
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
}
export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    
    try {
        const student = await Student.findByIdAndDelete(id);
    
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }
    
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
export const getStudentByRegistrationNumber = async (req, res) => {
    const { registrationNumber } = req.params;
    
    try {
        const student = await Student.findOne({
            registrationNumber,
        });             
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
    }       catch (error) {                         
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}       

export const getStudentByGrade = async (req, res) => {
    const { grade } = req.params;
    
    try {
        const students = await Student.find({
            grade,
        });
    
        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No students found in this grade",
            });
        }
    
        res.status(200).json({
            success: true,
            students,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}           



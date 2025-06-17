import { Teachers } from "../models/teacherSchema.js";
import { handleValidationError, errorHandler } from "../middleware/errorHandler.js";

export const createTeacher = async (req, res, next) => {
    const { name, phoneNumber, email, subject } = req.body;

    try {
        if (!name || !registrationNumber || !subject) {
            handleValidationError("Please fill all fields!", 400);
        }
        const teacher = await Teachers.create({ name, phoneNumber, email, subject });

        res.status(200).json({
            success: true,
            message: "Teacher added successfully!",
            teacher
        });
    } catch (err) {
        next(err);
    }
}
export const getAllTeachers = async (req, res, next) => {
    try {
        const teachers = await Teachers.find();
        res.status(200).json({
            success: true,
            teachers
        });
    } catch (err) {
        next(err);
    }
}
export const getTeacherById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const teacher = await Teachers.findById(id);
        if (!teacher) {
            handleValidationError("Teacher not found!", 404);
        }
        res.status(200).json({
            success: true,
            teacher
        });
    } catch (err) {
        next(err);
    }
}
export const updateTeacher = async (req, res, next) => {
    const { id } = req.params;
    const { name, phoneNumber, email, subject } = req.body;
    try {
        const teacher = await Teachers.findByIdAndUpdate(id, { name, phoneNumber, email, subject }, { new: true });
        if (!teacher) {
            handleValidationError("Teacher not found!", 404);
        }
        res.status(200).json({
            success: true,
            message: "Teacher updated successfully!",
            teacher
        });
    } catch (err) {
        next(err);
    }
}
export const deleteTeacher = async (req, res, next) => {
    const { id } = req.params;
    try {
        const teacher = await Teachers.findByIdAndDelete(id);
        if (!teacher) {
            handleValidationError("Teacher not found!", 404);
        }
        res.status(200).json({
            success: true,
            message: "Teacher deleted successfully!"
        });
    } catch (err) {
        next(err);
    }
}
// This code defines a set of controller functions for managing teachers in a school management system.
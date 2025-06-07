import { Exams } from "../models/examSchema";
import { handleValidationError } from "../middleware/errorHandler";

export const addExam = async (req, res, next) => {
    console.log(req.body);
    const { name, registrationNumber, className, marks } = req.body;
    try {
        if (!name || !registrationNumber || !className || !marks) {
            handleValidationError("Please fill all fields!", 400);
        }
        const exam = await Exams.create({ name, registrationNumber, className, marks });

        res.status(200).json({
            success: true,
            message: "Exam added successfully!",
            exam
        });
    } catch (err) {
        next(err);
    }
}
export const getAllExams = async (req, res, next) => {
    try {
        const exams = await Exams.find();
        res.status(200).json({
            success: true,
            exams
        });
    } catch (err) {
        next(err);
    }
}
export const getExamById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const exam = await Exams.findById(id);
        if (!exam) {
            handleValidationError("Exam not found!", 404);
        }
        res.status(200).json({
            success: true,
            exam
        });
    }
    catch (err) {
        next(err);
    }
}
export const updateExam = async (req, res, next) => {
    const { id } = req.params;
    const { name, registrationNumber, className, marks } = req.body;
    try {
        const exam = await Exams.findByIdAndUpdate(id, { name, registrationNumber, className, marks }, { new: true });
        if (!exam) {
            handleValidationError("Exam not found!", 404);
        }
        res.status(200).json({
            success: true,
            message: "Exam updated successfully!",
            exam
        });
    } catch (err) {
        next(err);
    }
}
export const deleteExam = async (req, res, next) => {
    const { id } = req.params;
    try {
        const exam = await Exams.findByIdAndDelete(id);
        if (!exam) {
            handleValidationError("Exam not found!", 404);
        }
        res.status(200).json({
            success: true,
            message: "Exam deleted successfully!"
        });
    } catch (err) {
        next(err);
    }
}
export const getExamsByClass = async (req, res, next) => {
    const { className } = req.params;
    try {
        const exams = await Exams.find({ className });
        if (exams.length === 0) {
            handleValidationError("No exams found for this class!", 404);
        }
        res.status(200).json({
            success: true,
            exams
        });
    } catch (err) {
        next(err);
    }
}                   


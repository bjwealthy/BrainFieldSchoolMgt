import { Assignment } from "../models/assignmentSchema";
import { handleValidationError } from "../middleware/errorHandler.js";

export const createAssignments = async (req, res, next) => {
    console.log(req.body);

    const { title, description, grade, deadline } = req.body;

    try {
        if (!title || !description || !grade || !deadline) {
            handleValidationError("Please fill the complete form", 400)
        } await Assignment.create({ title, description, grade, deadline });
        res.status(200).json({
            success: true,
            messsage: "Assignment created"
        })
    } catch (err) {
        next(err)
    }
};

export const getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({
            success: true,
            assignments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
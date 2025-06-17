import { Assignment } from "../models/assignmentSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

export const addAssignment = async (req, res, next) => {
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

export const updateAssignment = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, grade, deadline } = req.body;

    try {
        const assignment = await Assignment.findByIdAndUpdate(id, { title, description, grade, deadline }, { new: true });
        if (!assignment) {
            return handleValidationError("Assignment not found", 404);
        }
        res.status(200).json({
            success: true,
            message: "Assignment updated successfully",
            assignment
        });
    } catch (error) {
        next(error);
    }
}   

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

//get Assignment by ID
export const getAssignmentById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            return handleValidationError("Assignment not found", 404);
        }
        res.status(200).json({
            success: true,
            assignment,
        });
    } catch (error) {
        next(error);
    }
}

export const getAssignmentsByClass = async (req, res, next) => {
    const { className } = req.params;

    try {
        const assignments = await Assignment.find({ grade: className });
        if (!assignments || assignments.length === 0) {
            return handleValidationError("No assignments found for this class", 404);
        }
        res.status(200).json({
            success: true,
            assignments,
        });
    }
    catch (error) {
        next(error);
    }
}       

export const deleteAssignment = async (req, res, next) => {
    const { id } = req.params;

    try {
        const assignment = await Assignment.findByIdAndDelete(id);
        if (!assignment) {
            return handleValidationError("Assignment not found", 404);
        }
        res.status(200).json({
            success: true,
            message: "Assignment deleted successfully",
        });
    } catch (error) {
        next(error);
    }
}       
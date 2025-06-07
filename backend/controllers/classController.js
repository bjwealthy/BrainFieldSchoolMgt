import { handleValidationError } from "../middleware/errorHandler";
import { Class } from "../models/classSchema";

export const createClass = async (req, res, next) => {
    const { grade } = req.body;

    try {
        if (!grade) {
            handleValidationError("Please fill form!", 400);
        }
        await Class.create({ grade });
        res.status(200).json({
            success: true,
            message: "Class is created!"
        });
    } catch (err) {
        next(err);
    }
};

export const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Class.find();
        res.status(200).json({
            success: true,
            classes
        });
    } catch (err) {
        next(err)
    }
}
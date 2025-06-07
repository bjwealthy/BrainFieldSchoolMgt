
import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middleware/errorHandler.js";

export const createAnnouncements = async (req, res, next) => {
    console.log(req.body);

    const { announcement } = req.body;

    try {
        if (!announcement) {
            handleValidationError("Please fill form", 400)
        } await Announcement.create({ announcement });
        res.status(200).json({
            success: true,
            messsage: "Announcement created"
        })
    } catch (err) {
        next(err)
    }
}

export const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json({
            success: true,
            announcements,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
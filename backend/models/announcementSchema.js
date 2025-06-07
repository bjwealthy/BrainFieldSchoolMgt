import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    announcement: {
        type: String,
        required: true,
        trim: true,
    }
})

export const Announcement = mongoose.model("Announcement", announcementSchema);
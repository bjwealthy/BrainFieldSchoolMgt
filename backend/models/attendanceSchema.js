import mongoose from "mongoose";
import validator from "validator";

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ["Prresent", "Absent", "Absent with Apologies"],
        required: true,
    }
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);
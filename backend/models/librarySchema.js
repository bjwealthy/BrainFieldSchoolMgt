import mongoose from "mongoose";
import validator from "validator";

const librarySchema = new mongoose.Schema({
    boonkame: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        unique: true

    }
});
export default librarySchema;

export const Book = mongoose.model("Library", librarySchema);
import mongoose from "mongoose";
import validator from "validator"

const eventsSchema = new mongoose.Schema({
    events: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isAlpha(value, 'en-US', { ignore: ' ' })) {
                throw new Error('Event name must only contain letters and spaces');
            }
        }
    }
})

export const Events = mongoose.model("Events", eventsSchema);
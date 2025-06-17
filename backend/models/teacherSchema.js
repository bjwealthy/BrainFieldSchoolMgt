import mongoose from 'mongoose';
import validator from 'validator';

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{11}/.test(v);
            },
            message: 'Phone number must be 11 digits',
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    subject: {
        type: String,
        required: true,
    },
    
});
export default teacherSchema
export const Teachers = mongoose.model('Teachers', teacherSchema);
// This schema defines a Teacher model with fields for name, email, subject, and phone number.
// The email field is validated to ensure it is in the correct format, and the phone number is validated to ensure it is exactly 10 digits long.
// The model is then exported for use in other parts of the application.
// This schema can be used to create, read, update, and delete teacher records in a MongoDB database using Mongoose.
// The `Teacher` model can be used in controllers to handle teacher-related operations such as adding a new teacher, updating teacher details, or fetching teacher information from the database.


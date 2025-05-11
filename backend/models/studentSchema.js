import mongoose from "mongoose";
// This is the schema for the student model
// It defines the structure of the student document in the database
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
  }
})

export const Student = mongoose.model("Student", studentSchema);
export default Student;
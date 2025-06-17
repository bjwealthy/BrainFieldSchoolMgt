import express from "express";
import { addExam, getAllExams, getExamById, updateExam, deleteExam, getExamsByClass} from "../controllers/examController.js";

const router = express.Router();
router.get('/getall', getAllExams);
router.get('/:id', getExamById);
router.post('/', addExam);
router.put('/:id', updateExam);
router.delete('/:id', deleteExam);
router.get('/class/:className', getExamsByClass);   

export default router;
import express from 'express';
import {
  addAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
  getAssignmentsByClass,
} from '../controllers/assignmentController.js';
const router = express.Router();
router.get('/getall', getAllAssignments);
router.get('/:id', getAssignmentById);
router.post('/', addAssignment);
router.put('/:id', updateAssignment);
router.delete('/:id', deleteAssignment);
router.get('/class/:className', getAssignmentsByClass);
export default router;
// This code defines an Express router for handling assignment-related routes.
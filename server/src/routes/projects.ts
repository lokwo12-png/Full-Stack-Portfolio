import express from 'express';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects
} from '../controllers/projectController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProject);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin'), createProject);
router.put('/:id', authenticate, authorize('admin'), updateProject);
router.delete('/:id', authenticate, authorize('admin'), deleteProject);

export default router;

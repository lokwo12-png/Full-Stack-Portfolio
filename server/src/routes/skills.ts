import express from 'express';
import {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
  getSkillsByCategory,
  getFeaturedSkills
} from '../controllers/skillController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getSkills);
router.get('/featured', getFeaturedSkills);
router.get('/category/:category', getSkillsByCategory);
router.get('/:id', getSkill);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin'), createSkill);
router.put('/:id', authenticate, authorize('admin'), updateSkill);
router.delete('/:id', authenticate, authorize('admin'), deleteSkill);

export default router;

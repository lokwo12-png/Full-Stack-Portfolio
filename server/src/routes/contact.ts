import express from 'express';
import {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
  validateContactForm
} from '../controllers/contactController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/', validateContactForm, submitContact);

// Protected routes (admin only)
router.get('/', authenticate, authorize('admin'), getContacts);
router.get('/:id', authenticate, authorize('admin'), getContact);
router.put('/:id/status', authenticate, authorize('admin'), updateContactStatus);
router.delete('/:id', authenticate, authorize('admin'), deleteContact);

export default router;

import mongoose, { Schema } from 'mongoose';
import { ISkill } from '../types';

const skillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    unique: true,
    maxlength: [50, 'Skill name cannot exceed 50 characters']
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'tools', 'other'],
    required: [true, 'Skill category is required']
  },
  proficiency: {
    type: Number,
    required: [true, 'Proficiency level is required'],
    min: [1, 'Proficiency must be at least 1'],
    max: [100, 'Proficiency cannot exceed 100']
  },
  icon: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true,
    match: [/^#[0-9A-F]{6}$/i, 'Please enter a valid hex color code']
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
skillSchema.index({ category: 1, proficiency: -1 });
skillSchema.index({ featured: 1 });

export default mongoose.model<ISkill>('Skill', skillSchema);

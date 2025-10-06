import mongoose, { Schema } from 'mongoose';
import { IProject } from '../types';

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  longDescription: {
    type: String,
    trim: true,
    maxlength: [2000, 'Long description cannot exceed 2000 characters']
  },
  technologies: [{
    type: String,
    trim: true,
    required: true
  }],
  images: [{
    type: String,
    trim: true
  }],
  githubUrl: {
    type: String,
    trim: true,
    match: [/^https?:\/\/github\.com\/.+/, 'Please enter a valid GitHub URL']
  },
  liveUrl: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL']
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'other'],
    required: [true, 'Project category is required']
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    validate: {
      validator: function(this: IProject, value: Date) {
        return !value || value >= this.startDate;
      },
      message: 'End date must be after start date'
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ featured: 1, createdAt: -1 });
projectSchema.index({ category: 1 });
projectSchema.index({ status: 1 });

export default mongoose.model<IProject>('Project', projectSchema);

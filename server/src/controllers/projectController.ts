import { Request, Response, NextFunction } from 'express';
import Project, { IProject } from '../models/Project';
import { ApiResponse, PaginationQuery, PaginatedResponse } from '../types';

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 10, category, featured, status, sort = 'createdAt', order = 'desc' } = req.query as PaginationQuery & {
      category?: string;
      featured?: string;
      status?: string;
    };

    const query: any = {};
    
    if (category) query.category = category;
    if (featured !== undefined) query.featured = featured === 'true';
    if (status) query.status = status;

    const sortOrder = order === 'asc' ? 1 : -1;
    const sortObj: any = {};
    sortObj[sort] = sortOrder;

    const projects = await Project.find(query)
      .sort(sortObj)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Project.countDocuments(query);

    const response: PaginatedResponse<IProject> = {
      data: projects,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    };

    res.json({
      success: true,
      message: 'Projects retrieved successfully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project retrieved successfully',
      data: project
    });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await Project.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(6);

    res.json({
      success: true,
      message: 'Featured projects retrieved successfully',
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

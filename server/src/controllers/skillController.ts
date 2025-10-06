import { Request, Response, NextFunction } from 'express';
import Skill, { ISkill } from '../models/Skill';
import { ApiResponse, PaginationQuery, PaginatedResponse } from '../types';

export const getSkills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 20, category, featured, sort = 'proficiency', order = 'desc' } = req.query as PaginationQuery & {
      category?: string;
      featured?: string;
    };

    const query: any = {};
    
    if (category) query.category = category;
    if (featured !== undefined) query.featured = featured === 'true';

    const sortOrder = order === 'asc' ? 1 : -1;
    const sortObj: any = {};
    sortObj[sort] = sortOrder;

    const skills = await Skill.find(query)
      .sort(sortObj)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Skill.countDocuments(query);

    const response: PaginatedResponse<ISkill> = {
      data: skills,
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
      message: 'Skills retrieved successfully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};

export const getSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.json({
      success: true,
      message: 'Skill retrieved successfully',
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

export const createSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skill = await Skill.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Skill created successfully',
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

export const updateSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.json({
      success: true,
      message: 'Skill updated successfully',
      data: skill
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.json({
      success: true,
      message: 'Skill deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getSkillsByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await Skill.find({ category: req.params.category })
      .sort({ proficiency: -1 });

    res.json({
      success: true,
      message: 'Skills retrieved successfully',
      data: skills
    });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedSkills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await Skill.find({ featured: true })
      .sort({ proficiency: -1 })
      .limit(12);

    res.json({
      success: true,
      message: 'Featured skills retrieved successfully',
      data: skills
    });
  } catch (error) {
    next(error);
  }
};

import { Request, Response } from 'express';
import { getProjects } from '../services/project.service';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || undefined;
    const limit = parseInt(req.query.limit as string) || undefined;

    const result = await getProjects({ page, limit });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// You can add other controller functions here (create, update, delete) 
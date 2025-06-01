import { Router } from 'express';
import { getAllProjects } from '../controllers/project.controller';

const router = Router();

router.get('/', getAllProjects);

// You can add other routes here (POST, PUT, DELETE)

export default router; 
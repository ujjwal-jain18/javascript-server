import { Router } from 'express';
import TraineeRouter from './controllers/Trainee/Index';

const router = Router();
router.use('/Trainee', TraineeRouter);

export default router;

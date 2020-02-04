import { Router } from 'express';
import TraineeRouter from './controllers/Trainee/Routes';

const router = Router();
router.use('/Trainee', TraineeRouter);

export default router;

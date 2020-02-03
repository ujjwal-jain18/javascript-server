import { Router } from 'express';
import TraineeController from './Controller';

const TraineeRouter = Router();

TraineeRouter.route('/')
.get(TraineeController.list)
.post(TraineeController.create)
.delete(TraineeController.delete) ;
TraineeRouter.route('/id')
.put(TraineeController.update);
export default TraineeRouter;
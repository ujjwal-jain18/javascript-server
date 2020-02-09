import { Router } from 'express';
import UserController from './Controller';

const UserRouter = Router();

UserRouter.route('/')
.get(  UserController.list)
.post( UserController.create)
.put( UserController.update);
UserRouter.route('/:id')
.delete( UserController.delete) ;
export default UserRouter;
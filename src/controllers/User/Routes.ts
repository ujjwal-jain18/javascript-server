import { Router } from 'express';
import UserController from './Controller';
import validationhandler from '../../libs/Routes/ValidationHandlers';
import authMiddleware from '../../libs/Routes/authMiddleWare';
import config from '../User/validation';

const UserRouter = Router();

// UserRouter.route('/')
// .get( authMiddleware('Users', 'read'), validationhandler(config.get), UserController.list)
// .post(authMiddleware('Users', 'read'),  validationhandler(config.create), UserController.create)
// .put(authMiddleware('Users', 'read'), validationhandler(config.update), UserController.update);
// UserRouter.route('/:id')
// .delete(authMiddleware('Users', 'read') , validationhandler(config.delete), UserController.delete) ;
UserRouter.route('/')
.get(  UserController.list)
.post( UserController.create)
.put( UserController.update);
UserRouter.route('/:id')
.delete( UserController.delete) ;
export default UserRouter;
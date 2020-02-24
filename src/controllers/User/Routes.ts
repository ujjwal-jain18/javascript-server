import { Response, Router } from 'express';
import UserController from './Controller';
import authMiddleWare from '../../libs/Routes/authMiddleWare';
import { IRequest } from '../../libs/interface';


const UserRouter = Router();
// import swagger from 'swagger'

/**
 * @swagger
 *
 *  definitions:
 *      Login:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: ujjwal.jain@successive.tech
 *          Password:
 *              type: string
 *              example: Training@123
 *      Token:
 *           type: object
 *           properties:
 *               status:
 *                   example: Ok
 *               message:
 *                   example: Success
 *               data:
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVqandhbC5qYWluQHN1Y2Nlc3NpdmUudGVjaCIsImlkIjoiNWU0NjgxMDc0MWY1NzEzMTk3OTliNTUzIiwiaWF0IjoxNTgyNTI1NzM2LCJleHAiOjE1ODI1MjY2MzZ9.ro9Ka6kSkXEuandHavGrzqjEpT2lb2YZcecIFvqojo8
 */

/**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     description: Details of the current user.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *             $ref: '#/definitions/TraineeResponse'
 */
UserRouter.route('/me')
.get(authMiddleWare('Users', 'all'), (req: IRequest, res: Response) => {
    res.send(req.user);
 });
/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     description: Login Credentials
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *              $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *          oneOf:
 *          properties:
 *              status:
 *                  example: "Bad Request"
 *              message:
 *                  example: Password does not match
 *              err:
 *                  example: Password is incorrect
 */

UserRouter.route('/login')
.post(UserController.login);

export default UserRouter;
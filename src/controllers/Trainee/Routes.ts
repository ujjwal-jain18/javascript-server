import { Router } from 'express';
import TraineeController from './Controller';
import validationhandler from '../../libs/Routes/ValidationHandlers';
import authMiddleware from '../../libs/Routes/authMiddleWare';
import config from '../Trainee/validation';

const TraineeRouter = Router();

/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: ujjwal.jain@successive.tech
 *          name:
 *              type: string
 *              example: ujjwal jain
 *          Password:
 *              type: string
 *              example: training@123
 *          mob:
 *              type: number
 *              example: "9971780910"
 *          address:
 *              type: string
 *              example: Delhi
 *          dob:
 *              type: Date
 *              example: 18/04/1999
 *          role:
 *              type: string
 *              example: trainee
 *          hobbies:
 *              type: array
 *              example: ["singing", "hiking"]
 *
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5e4e6e93c095d84d34045a30
 *          email:
 *              type: string
 *              example: ujjwal.jain@successive.tech
 *          name:
 *              type: string
 *              example: Ujjwal Jain
 *          mob:
 *              type: number
 *              example: "9971780910"
 *          address:
 *              type: string
 *              example: Delhi
 *          dob:
 *              type: Date
 *              example: 18/04/1999
 *          role:
 *              type: string
 *              example: trainee
 *          hobbies:
 *              type: array
 *              example: ["singing", "hiking"]
 *          originalId:
 *              example: 5e4e6e93c095d84d34045a30
 *          createdBy:
 *              example: 5e45404398e86d576ad964e6
 *          createdAt:
 *              example: 2020-02-20T11:33:39.325Z
 *          v:
 *              example:0
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2019-03-10T19:51:37.066Z
 *
 */
TraineeRouter.route('/')
/**
 * @swagger
 *
 * /api/trainee:
 *   get:
 *     description: Returns the list of the trainees
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: skip
 *         description: elements to be skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to be shown
 *         in: query
 *         required: false
 *         type: number
 *       - name: sortBy
 *         description: elements to be sort by
 *         in: query
 *         required: false
 *         type: string
 *       - name: search
 *         description: element to be search
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Trainee List
 *         schema:
 *              properties:
 *                  status:
 *                      example: Ok
 *                  message:
 *                      example: 'Trainee List , No. of trainee: 2'
 *                  count:
 *                      example: 2
 *                  data:
 *                      type: object
 *                      allOf:
 *                              - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
.get( authMiddleware('getUsers', 'read'), validationhandler(config.get), TraineeController.list)
/**
 * @swagger
 *
 * /api/trainee:
 *   post:
 *     description: Returns the success reponse on creation
 *     security:
 *          - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User's Data.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User created successfully
 *         schema:
 *              properties:
 *                  status:
 *                      example: Ok
 *                  message:
 *                      example: Trainee successfully created
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *                      properties:
 *                              password:
 *                                  type: string
 *                                  example: "*****"
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
.post(authMiddleware('getUsers', 'read'),  validationhandler(config.create), TraineeController.create)
/**
 * @swagger
 *
 * /api/trainee:
 *   put:
 *      description: Returns the success reponse on creation
 *      security:
 *           - Bearer: []
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: User
 *          description: User's Data.
 *          in: body
 *          required: true
 *          type: object
 *          schema:
 *           properties:
 *               id:
 *                   example: 5e4e6e93c095d84d34045a30
 *               dataToUpdate:
 *                   type: object
 *                   allOf:
 *                       - $ref: '#/definitions/TraineePost'
 *      responses:
 *       200:
 *         description: user data successfully updated
 *         schema:
 *              properties:
 *                  status:
 *                      example: Ok
 *                  message:
 *                      example: User data successfully Updated
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *      403:
 *          description: unauthorised access
 *          schema:
 *               $ref: '#/definitions/Unauthorized'
 */
.put(authMiddleware('getUsers', 'read'), validationhandler(config.update), TraineeController.update);
/**
 * @swagger
 *
 *  /api/trainee/{id}:
 *    delete:
 *      description: Returns the success reponse on creation
 *      security:
 *        - Bearer: []
 *      produces:
 *        - application/json
 *      parameters:
 *        - name: id
 *          description: id of user to be deleted.
 *          in: path
 *          required: true
 *          type: string
 *          example: 5e4e6e93c095d84d34045a30
 *      responses:
 *       200:
 *         description: Data deleted
 *         schema:
 *              properties:
 *                  status:
 *                      example: Ok
 *                  message:
 *                      example: User data successfully deleted
 *                  data:
 *                      example: 5e4e6e93c095d84d34045a30
 *      403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
TraineeRouter.route('/:id')
.delete(authMiddleware('getUsers', 'read') , validationhandler(config.delete), TraineeController.delete) ;
export default TraineeRouter;
import * as jwt from 'jsonwebtoken';
import configuration  from '../../config/configuration';
import hasPermission from '../permissions';
import { Response, NextFunction } from 'express';
import UserRepository from '../../ repositories/user /UserRepository';
import { IRequest } from '../interface';

const userRepository = new UserRepository();

export default (moduleName: any , permissionType: any) => (req: IRequest, res: Response, next: NextFunction) => {
    console.log('------------AUTHMIDDLEWARE------------', moduleName, permissionType);

         const token = req.headers.authorization;
         const { secretKey } = configuration;
         const decodedUser = jwt.verify(token, secretKey);

         if (!decodedUser) {
             return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
         }

         const {id, email} = decodedUser ;

         userRepository.findOne({_id: id, email})

         .then(result => {
             if (!result) {
                return next({
                    staus: 403,
                    error: 'Unauthorized Access',
                    message: 'User does not exist in Database'
                });
             }
             req.user = result;
            const role: string = decodedUser.role;

            if (!hasPermission(moduleName, role, permissionType)) {
                return next({
                    staus: 403,
                    error: 'Unauthorized Access',
                    message: 'Unauthorized Access'
                });
            } console.log(role + ' has permission of ' + permissionType );
            next();
        })

        .catch ((error: any) => {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: error.message
            });
        });
};

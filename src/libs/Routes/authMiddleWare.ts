import * as jwt from 'jsonwebtoken';
import configuration  from '../../config/configuration';
import hasPermission from '../permissions';
import { Response, NextFunction } from 'express';
import UserRepository from '../../ repositories/user /UserRepository';
import { IRequest } from '../interface';
import ErrorHandler from './ErrorHandler';

const userRepository = new UserRepository();

const ErrorGenerator = (next: NextFunction) => {
   return next({
        staus: 401,
        error: 'Unauthorized Access',
        message: 'Unauthorized Access'
    });
}

export default (moduleName: any , permissionType: any) => (req: IRequest, res: Response, next: NextFunction) => {
    console.log('------------AUTHMIDDLEWARE------------', moduleName, permissionType);

         const token = req.headers.authorization;
         const { secretKey } = configuration;
         const decodedUser = jwt.verify(token, secretKey);

         if (!decodedUser) {
             ErrorGenerator(next);
         }

         const {id, email} = decodedUser ;

         userRepository.findOne({_id: id, email})

         .then(result => {
             if (!result) {
                ErrorGenerator(next);
             }
             req.user = result;
            const role: string = decodedUser.role;

            if (!hasPermission(moduleName, role, permissionType)) {
                ErrorGenerator(next);
            }
            console.log(role + ' has permission of ' + permissionType );
            next();
        })

        .catch ((error: any) => {
            ErrorGenerator(next);
        });
};

import * as jwt from 'jsonwebtoken';
import configuration  from '../../config/configuration';
import hasPermission from '../permissions';
import { Request, Response, NextFunction } from 'express';

export default (moduleName: any , permissionType: any) => (req: Request, res: Response, next: NextFunction) => {
    console.log('------------AUTHMIDDLEWARE------------', moduleName, permissionType);
    try {

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
        const role: string = decodedUser.role;
        if (!hasPermission(moduleName, role, permissionType)) {
            return next({
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'
            });
        }
    next();
    }
    catch (error) {
        return next({
            staus: 403,
            error: 'Unauthorized Access',
            message: error.message
        });
    }
};

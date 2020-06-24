import IUserModel from '../ repositories/user /IUserModel';
import { Request } from 'express';
interface IAUTH {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
    }
interface IPERM {
    getUsers: IAUTH;
    Users: IAUTH;
    }
interface IRequest extends Request {
        user: IUserModel;
    }
    export { IPERM, IRequest } ;
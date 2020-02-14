import IVersionableModel from '../ versionable /IVersionableDocument';

export default interface IUserModel extends IVersionableModel {
    id: string;
    name: string;
    address: string;
    email: string;
    Dob: Date;
    mobileNumber: number;
    hobbies: string[];
    role: string;

}
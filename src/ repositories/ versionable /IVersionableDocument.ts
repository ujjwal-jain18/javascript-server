import * as mongoose from 'mongoose';

interface IVersionableModel extends mongoose.Document {
    createdAt: Date;
    createdBY: string;
    updatedAt: Date;
    updatedBY: string;
    deletedAt: Date;
    deletedBY: string;
    originalId: any;

}
export default IVersionableModel;
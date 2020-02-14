import * as mongoose from 'mongoose';
import IVersionableModel from '../ versionable /IVersionableDocument';

export default class VersioningRepository< D extends mongoose.Document , M extends mongoose.Model <D>> {

    constructor(modelType: any) {
        this.modelType = modelType;
    }
    public getObjectId ()  {
        return String(mongoose.Types.ObjectId());
    }

    public modelType: M;

    public count() {
        return this.modelType.countDocuments();
    }

    public findOne (query) {
        return this.modelType.findOne(query);
    }

    public async create( options): Promise<D> {
        const id = this.getObjectId();
        return this.modelType.create({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBY: id
        });

    }
    public async update(id, options): Promise<D> {
        const ID = this.getObjectId();
        await this.newUpdatedData(id);
        return this.modelType.create({
            ...options,
            _id: ID,
            originalId: id,
            updatedAt: Date.now(),
            updatedBY: id
        });
    }
    public async newUpdatedData(id): Promise<D> {
        const data = await this.modelType.findByIdAndUpdate(id, {
            deletedAt: Date.now(),
            deletedBY: id
        });
        return data;
    }

    public async list() {
        return this.modelType.find();
    }

    public async delete(id: string) {
       await this.newUpdatedData(id);
    }
}

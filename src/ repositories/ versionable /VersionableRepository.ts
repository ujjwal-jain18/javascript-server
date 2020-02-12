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
        const _id = this.getObjectId();
        this.newUpdatedData(id, options);
        return this.modelType.findByIdAndUpdate(id, options, {
            ...options,
            deletedAt: Date.now(),
            deletedBY: id
        });

    }
    public async newUpdatedData(id, options): Promise<D> {
        const ID = this.getObjectId();
        return this.modelType.create({
            ...options,
            _id: ID,
            originalId: id,
            updatedAt: Date.now(),
            updatedBY: id
        });
    }

    public async list() {
        return this.modelType.find();
    }

    public async delete(id: string) {
        return this.modelType.deleteOne({ id });
    }
}

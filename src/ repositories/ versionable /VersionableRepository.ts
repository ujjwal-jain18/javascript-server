import * as mongoose from 'mongoose';

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
    public countTrainee = () => {
        return this.modelType.countDocuments({role: 'trainee', deletedAt: {$exists: false}});
        }

    public findOne(query) {
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
    public list(userRole, skip, limit, sortBy, searchBy): Promise<D[]> {
        return  this.modelType.find({role: userRole, deletedAt: undefined, ...searchBy}, {Password: 0}).sort(sortBy).skip(Number(skip)).limit(Number(limit)).exec();
}

    public async delete(id: string) {
       await this.newUpdatedData(id);
    }
}

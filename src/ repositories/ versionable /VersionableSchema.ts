import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
    constructor(schema, options) {
        const baseSchema = {
            createdAt: Date,
            createdBY: String,
            updatedAt: Date,
            updatedBY: String,
            deletedAt: Date,
            deletedBY: String,
            originalId: String,
        };
        super({...schema, ...baseSchema}, options);
    }
}
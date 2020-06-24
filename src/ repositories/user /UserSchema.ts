import IVersionableSchema from '../ versionable /VersionableSchema';

class UserSchema extends IVersionableSchema {

    constructor(options: any) {
        const userSchema = {
            id: String,
            name: String,
            address: String,
            email: String,
            Dob: Date,
            mobileNumber: Number,
            hobbies: [String],
            role: String,
            Password: String
        };
        super(userSchema, options);
    }
}

export default UserSchema;
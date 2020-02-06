import * as Mongoose from 'mongoose';


class Database {
    static open = (mongoUri: string ) => {
        return new Promise(( resolve , reject) => {

            Mongoose.connect (mongoUri, (err) => {
                if (err) {
                    console.log('err in Mongo DB connection');
                    return reject(err);
                }
                return resolve('Connection Successful ');
            });
        });

    }
    static disconnect = (mongoUri: string) => {
        Mongoose.connection.close();
    }
}
export default Database;
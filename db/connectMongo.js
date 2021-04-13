import { MongoClient } from 'mongodb';

// cache db connection for serverless enviroment
global.mongo = global.mongo || {};

const connectToMongoDb = async ( dbName ) => {
    if (!global.mongo.client) { // dbName does not exist in Mongo
        global.mongo.client = new MongoClient(process.env.MONGODB_URL, { // create a new MongoDb
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000
        });

        // connecting to new MongoDb client
        console.log('...Connecting to MongoDB...');
        await global.mongo.client.connect();
        console.log('!!!Connection to MongoDB Established!!!');
    }

    const db = global.mongo.client.db( dbName );

    return { db, dbCLient: global.mongo.client };
}

export default connectToMongoDb;
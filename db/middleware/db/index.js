// database
import connectToMongoDb from '../../connectMongo';

export async function onMongoDbConnect( req, res, next ) {
    const { mongoDB, mongoDBClient } = await connectToMongoDb();
    req.mongoDB = mongoDB;
    req.mongoDBClient = mongoDBClient;

    next();
}
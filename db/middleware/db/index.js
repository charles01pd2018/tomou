// database
import connectToMongoDB from '../../connectMongo';

export async function onMongoDbConnect( req, res, next ) {
    const { mongoDB, mongoDBClient } = await connectToMongoDB();
    req.mongoDB = mongoDB;
    req.mongoDBClient = mongoDBClient;

    next();
}
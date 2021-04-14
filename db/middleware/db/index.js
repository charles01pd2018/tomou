// database
import connectToMongoDb from '../../connectMongo';

export async function onMongoDbConnect( req, res, next ) {
    const { db, dbClient } = await connectToMongoDb();
    req.db = db;
    req.dbClient = dbClient;

    next();
}
// database
import connectToMongoDb from '../../connectMongo';

export const onMongoDbConnect = async ( req, res, next ) => {
    const { db, dbClient } = await connectToMongoDb();
    req.db = db, req.dbClient = dbClient;

    next();
}
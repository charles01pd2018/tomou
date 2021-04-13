// database
import connectToMongoDb from '../../connectMongo';

export const onMongoDbConnect = async ( req, res, next ) => {
    const { db, dbClient } = await connectToMongoDb();
    req.db, req.dbClient = db, dbClient;

    next();
}
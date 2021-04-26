// dependencies
import { nanoid } from 'nanoid';

var RESOURCE_NAME = 'folders';

export const createFolder = async ( mongoDB, folder ) => {
    return mongoDB.collection( RESOURCE_NAME ).insertOne(
        {
            _id: nanoid(12),
            ...folder,
            creationDate: new Date().toDateString(),
        },
    ).then( ({ ops }) => ops[0] );
}

export const deleteFolder = async ( mongoDB, id ) => {
    return mongoDB.collection.findOneAndDelete( 
        { _id: id, },
        { maxTimeMS: 5, }, 
    );
}

export const getFolders = async ( mongoDB, userId ) => {
    return mongoDB.collection( RESOURCE_NAME ).find( { createmongoDBy: userId } ).toArray();
}
// dependencies
import { nanoid } from 'nanoid';

var RESOURCE_NAME = 'folders';

const folderList = ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( RESOURCE_NAME ).find( {
        createdBy: user.id,
    } ).toArray();
}

const newFolder = ( _, { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection( RESOURCE_NAME ).insertOne( {
        _id: nanoid( 12 ),
        ...input,
        creationDate: new Date().toDateString(),
    } );
}

const deleteFolder = ( _, { id }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection.findOneandDelete(
        { _id: id, },
        { maxTimeMS: 5 },
    );
}

export default {
    Query: {
        folderList,
    },
    Mutation: {
        newFolder,
    }
}
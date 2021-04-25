// dependencies
import { nanoid } from 'nanoid';

var RESOURCE_NAME = 'folders';

const foldersList = ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( RESOURCE_NAME ).find( {
        createdBy: user.id,
    } ).toArray();
}

const newFolder = ( _, { data }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection( RESOURCE_NAME ).insertOne( {
        _id: nanoid( 12 ),
        ...data,
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
        foldersList,
    },
    Mutation: {
        newFolder,
        deleteFolder,
    }
}
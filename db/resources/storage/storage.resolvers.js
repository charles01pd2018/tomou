// dependencies
import { nanoid } from 'nanoid';

/* FOLDERS RESOURCE */
const FOLDERS_RESOURCE_NAME = 'folders';

const folderList = ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).find( {
        createdBy: user.id,
    } ).toArray();
}

const newFolder = ( _, { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).insertOne( {
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

const storageResolvers = {
    Query: {
        folderList
    },
    Mutation: {
        newFolder,
        deleteFolder
    }
}

export default storageResolvers;
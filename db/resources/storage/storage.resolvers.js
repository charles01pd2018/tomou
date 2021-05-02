// dependencies
import { nanoid } from 'nanoid';

/* FOLDERS RESOURCE */
const FOLDERS_RESOURCE_NAME = 'folders';

const folderList = async ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).find( {
        createdBy: user.id,
    } ).toArray();
}

const newFolder = async ( _, { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).insertOne( {
        _id: nanoid( 12 ),
        ...input,
        creationDate: new Date().toDateString(),
    } ).then( ( { ops } ) => ops[ 0 ] );
}

const deleteFolder = async ( _, { id }, { db: { mongo } } ) => {
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
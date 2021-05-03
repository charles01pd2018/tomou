/* FOLDERS RESOURCE */
const FOLDERS_RESOURCE_NAME = 'folders';

const folderList = async ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).find( {
        userID: user.id,
    } ).toArray();
}

const newFolder = async ( _, { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).insertOne( {
        ...input,
    } ).then( ( { ops } ) => ops[ 0 ] );
}

const deleteFolder = async ( _, { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection.findOneandDelete(
        { ...input },
        { maxTimeMS: 5 },
    );
}

const reorderFolderList = ( _,  { input }, { db: { mongo } } ) => {
    return '';
}

const storageResolvers = {
    Query: {
        folderList
    },
    Mutation: {
        newFolder,
        deleteFolder,
        reorderFolderList
    }
}

export default storageResolvers;
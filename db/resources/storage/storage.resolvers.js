/* FOLDERS RESOURCE */
const FOLDERS_RESOURCE_NAME = 'folders';

const folderList = async ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).find( {
        userID: user.id,
    } )
    .sort( { updateDate: -1, interactionDate: -1, creationDate: -1 } )
    .toArray();
}

const newFolder = async ( _, { input }, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).insertOne( {
        userID: user.id,
        ...input,
    } ).then( ( { ops } ) => ops[ 0 ] );
}

const deleteFolder = async ( _, { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection.findOneandDelete(
        { ...input },
        { maxTimeMS: 5 },
    );
}

const updateFolderInteract = ( _,  { input }, { db: { mongo } } ) => {
    return mongo.mongoDB.collection( FOLDERS_RESOURCE_NAME ).findOneAndUpdate( 
        { _id: input._id },
        { interactionDate: input.interactionDate } 
        ).then( ( { ops } ) => ops[ 0 ] );
}

const storageResolvers = {
    Query: {
        folderList
    },
    Mutation: {
        newFolder,
        deleteFolder,
        updateFolderInteract,
    }
}

export default storageResolvers;
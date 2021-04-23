// dependencies
import { nanoid } from 'nanoid';

var RESOURCE_NAME = 'folders';

const foldersList = ( _, __, { mongoDB, user } ) => {
    return mongoDB.collection( RESOURCE_NAME ).find( {
        createdBy: user.id,
    } ).toArray();
}

const newFolder = ( _, { data }, { mongoDB } ) => {
    return mongoDB.collection( RESOURCE_NAME ).insertOne( {
        _id: nanoid( 12 ),
        ...data,
        creationDate: new Date().toDateString(),
    } );
}

const deleteFolder = ( _, { id }, { mongoDB } ) => {
    return mongoDB.collection.findOneandDelete(
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
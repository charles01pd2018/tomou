// dependencies
import { nanoid } from 'nanoid';

var RESOURCE_NAME = 'folders';

export const createFolder = async ( db, folder ) => {
    return db.collection(RESOURCE_NAME).insertOne(
        {
            _id: nanoid(12),
            ...folder,
            creationDate: new Date().toDateString(),
        },
    ).then( ({ ops }) => ops[0] );
}

export const getFolders = async ( db, userId ) => {
    return db.collection(RESOURCE_NAME).find( { createdBy: userId } ).toArray();
}
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

export const deleteFolder = async ( db, id ) => {
    try {
        const deletedFolder = await db.collection.findOneAndDelete( 
            { _id: id, },
            { maxTimeMS: 5, }, 
        );
        
        return deleteFolder;
    } catch (e) {
        console.log(e);
    }
}

export const getFolders = async ( db, userId ) => {
    return db.collection(RESOURCE_NAME).find( { createdBy: userId } ).toArray();
}
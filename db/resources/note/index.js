// dependencies
import { nanoid } from 'nanoid';

var RESOURCE_NAME = 'notes';

// idk if i need this cause im always gonna be fetching multiple notes when the user navigates into a folder since they go into my cool af UI
export const getOneNote = async ( db, id ) => {
    return db.collection( RESOURCE_NAME ).findOne( { _id: id } );
}

export const getNotesByFolder = async ( db, folderId ) => {
    return db.collection (RESOURCE_NAME ).find( { folder: folderId } ).toArray();
}

export const createNote = async ( db, note ) => {
    return db.collection (RESOURCE_NAME ).insertOne( 
        {
            id: nanoid(12),
            ...note,
            creationDate: new Date().toDateString(),
        } 
    ).then( ({ ops }) => ops[0] );
}

export const updateNote = async ( db, id, updates ) => {
    const operation = await db.collection( RESOURCE_NAME ).updateOne( 
        { _id: id, },
        { $set: updates },
     );

     if ( !operation.result.ok ) {
         throw new Error( 'For some reason, we could not update the note :-(' );
     }

     const updatedNote = await db.collection(RESOURCE_NAME).findOne( { _id: id } );
     return updatedNote;
}


var RESOURCE_NAME = 'users';

export const getUserByID = async ( db, id ) => {
    return db.collection(RESOURCE_NAME).findOne( {_id: id } );
}
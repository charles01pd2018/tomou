// dependencies
import fs from 'fs';
import path from 'path';


export const loadGQLTypeSchema = ( type ) => {
    new Promise( ( resolve, reject ) => {
        const schemaPath = path.join( process.cwd(), `db/resources/${type}/${type}.gql` );

        fs.readFile ( schemaPath, { encoding: 'utf-8' }, ( error, schema ) => {
            if ( error ) return reject( error );
            resolve( schema );
        } );
    } ); 
}
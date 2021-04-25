// dependencies
import { ApolloServer } from 'apollo-server';
import { merge } from 'lodash';
// schema
import { loadGQLTypeSchema } from '../../db/utils/schema';
import folder from '../../db/resources/folder/folder.resolvers';
// database
import connectToMongoDb from '../../db/connectMongo';

/* CONSTANTS */
const types = [ 'folder', ]; // resource types
const rootSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`

/* SERVER */
const createApolloServer = async () => {
    const schemaTypes = await Promise.all( types.map( loadGQLTypeSchema ) ); // loading all the schema types like a boss
    console.log ( ...schemaTypes );
    console.log( rootSchema );
    console.log( merge( {}, folder ) );

    return new ApolloServer( {
        typeDefs: [ rootSchema, ...schemaTypes ], /* LOOK INTO WHAT THIS DOES */
        resolvers: merge( {}, folder ), // merges all the queries and muatation into one obejct
        context: async ( { req } ) => {
            const session = await getSesion( { req } );
            const { mongoDB, mongoDBClient } = await connectToMongoDb();
    
            return { session, db: { 
                mongo: { mongoDB, mongoDBClient } 
            } };
        },
        playground: {
            settings: {
                'request.credentials': 'include',
            }
        }
    } );
}

export const config = {
    api: {
        bodyParser: false,
    },
}

const apolloServer = createApolloServer(); // idk how the hell to resolve this promise
console.log( apolloServer );
export default apolloServer.createHandler( {
    'path': '/api'
} );
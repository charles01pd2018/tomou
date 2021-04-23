// dependencies
import { ApolloServer } from 'apollo-server';
import { merge } from 'lodash';
// schema
import { loadGQLTypeSchema } from '../../db/utils/schema';
// database
import { connectToMongoDb } from '../../db/connectMongo';


const types = [ 'folder' ]; // types that can be queried for data

const rootSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`

const schemaTypes =  await Promise.all( types.map( loadGQLTypeSchema ) ); // loading all the schema types like a boss

const apolloServer = new ApolloServer( {
    typeDefs: [ rootSchema, ...schemaTypes ], /* LOOK INTO WHAT THIS DOES */
    resolvers: merge( {}, FOLDER_SCHEMA ), // mergins all the queries and muatation into one obejct
    context: async ( { req } )  => {
        const session = await getSesion({ req });
        const { mongoDB } = connectToMongoDb();

        return { session, mongoDB };
    },
    playground: {
        settings: {
            'request.credentials': 'include',
        }
    }
} );

export default apolloServer.createHandler( {
    'path': '/api'
} );
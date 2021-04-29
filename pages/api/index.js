// dependencies
import { ApolloServer } from 'apollo-server-micro';
import { merge } from 'lodash';
// resources
import { tasksResolvers } from '../../db/resources/resolvers'
import { tasksSchemas } from '../../db/resources/schemas';
// database
import connectToMongoDb from '../../db/connectMongo';


/* CONSTANTS */
// const types = [ 'folder', ]; // resource types

const typeDefs = [
    tasksSchemas,
];

const resolvers = merge(
    tasksResolvers,
);

/* SERVER */
const apolloServer = new ApolloServer( {
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: async ( { req } ) => {
        const session = await getSesion( { req } );
        const { mongoDB, mongoDBClient } = await connectToMongoDb();

        return { session, db: { 
            mongo: { mongoDB, mongoDBClient } 
        } };
    },
} );

/* DO NOT REMOVE THIS THIS IS VITAL FOR THE GRAPHQL API TO WORK */
export const config = {
    api: {
        bodyParser: false,
    },
}

console.log( apolloServer );

export default apolloServer.createHandler( {
    'path': '/api'
} );
// dependencies
import { ApolloServer } from 'apollo-server-micro';
import { merge } from 'lodash';
import { getSession } from 'next-auth/client';
// resources
import { tasksResolvers } from '../../db/resources/resolvers'
import { tasksSchemas } from '../../db/resources/schemas';
// database
import connectToMongoDb from '../../db/connectMongo';


/* CONSTANTS */
const typeDefs = [
    tasksSchemas,
];

const resolvers = merge(
    tasksResolvers,
);

const context = async ( { req } ) => {
    const session = await getSession( { req } );
    const { mongoDB, mongoDBClient } = await connectToMongoDb();

    return { session, db: { 
        mongo: { mongoDB, mongoDBClient } 
    } };
}

/* SERVER */
const apolloServer = new ApolloServer( {
    typeDefs,
    resolvers,
    context,
} );

/* DO NOT REMOVE THIS THIS IS VITAL FOR THE GRAPHQL API TO WORK */
export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler( {
    path: '/api'
} );
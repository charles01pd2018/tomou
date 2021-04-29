// dependencies
import { ApolloServer } from 'apollo-server-micro';
import { getSession } from 'next-auth/client';
// resources
import allResolvers from '../../db/resources/resolvers'
import allSchemas from '../../db/resources/schemas';
// database
import connectToMongoDb from '../../db/connectMongo';


/* SERVER */
const apolloServer = new ApolloServer( {
    typeDefs: allSchemas,
    resolvers: allResolvers,
    context: async ( { req } ) => {
        const session = await getSession( { req } );
        const { mongoDB, mongoDBClient } = await connectToMongoDb();
    
        return { user: session.user, db: { 
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

export default apolloServer.createHandler( {
    path: '/api'
} );
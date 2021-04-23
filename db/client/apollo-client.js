// dependencies
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { getSession } from 'next-auth/client';
// schemas
import { loadGQLTypeSchema } from '../utils/schema';
// import { FOLDER_SCHEMA } from '../resources/folder/folder.gql';

const cache = InMemoryCache();
const http = new HttpLink( {
    uri: process.env.NEXT_PUBLIC_API_HOST,
} );

const link = ApolloLink.from( [ 
    http
] );

const apolloClient = new ApolloClient( { 
    cache,
    link
} );

export default apolloClient;
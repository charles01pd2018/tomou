// dependencies
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { useMemo } from 'react';
// utils
import { isSSR } from '../utils'


/* HELPERS */
const createApolloClient = () => {
    const cache = new InMemoryCache();
    const http = new HttpLink( {
        uri: process.env.NEXT_PUBLIC_URI,
    } );
    const link = ApolloLink.from( [ 
        http
    ] );

    return new ApolloClient( {
        ssrMode: isSSR(),
        link: link,
        cache: cache,
    } );
}

let apolloClient;
const initializeApollo = ( initialState=null ) => {
    const _apolloClient = apolloClient ?? createApolloClient(); // nullish logical operator - only creates apollo client if initial let is null

    if ( initialState ) {
        const existingCache = _apolloClient.extract();
        _apolloClient.cache.restore( { ...existingCache, ...initialState } ); // merge existing cache with initial state
    }
    if ( !apolloClient ) apolloClient = _apolloClient; // create apolloClient once in the client

    return _apolloClient;
}

/* RETURN */
const useApollo = ( initialState ) => {
    const store = useMemo( () => initializeApollo( initialState ), [ initialState ] ); // reinitialize apolloClient only when initialState changes
    
    return store;
}

export default useApollo;
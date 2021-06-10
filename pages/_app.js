// dependencies
import 'reflect-metadata'; // FIXES A MONGODB BUG FOR NEXT-AUTH *DO NOT REMOVE*
import { Provider } from 'next-auth/client';
// client
import { ApolloProvider } from '@apollo/react-hooks';
import useApollo from '../db/client/apolloClient';
// styles
import '../styles/styles.scss'

const TomouApp = ({ Component, pageProps }) => {
  const { initialApolloState, session } = pageProps;
  const apolloClient = useApollo( initialApolloState );
  
  return (
        <ApolloProvider client={apolloClient}>
          <Provider session={session}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
    );
}

export default TomouApp;

// dependencies
import 'reflect-metadata'; // FIXES A MONGODB BUG FOR NEXT-AUTH *DO NOT REMOVE*
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
// client
import apolloClient from '../db/client/apollo-client';
// styles
import '../styles/styles.scss'

const TomouApp = ({ Component, pageProps }) => {
  return (
      <ApolloProvider client={apolloClient}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    );
}

export default TomouApp;

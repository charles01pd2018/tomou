// dependencies
import 'reflect-metadata'; // FIXES A MONGODB BUG FOR NEXT-AUTH *DO NOT REMOVE*
import { Provider } from 'next-auth/client';
// styles
import '../styles/styles.scss'

const TomouApp = ({ Component, pageProps }) => {
  return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    );
}

export default TomouApp;

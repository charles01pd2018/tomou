import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static getInitialProps( {  renderPage } ) {
    const page = renderPage();

    return {
        ...page,
      };
  }

  render() {
    return (
      <Html lang="en">
        <Head >
            <link rel="preload" href="/fonts/quicksand/Quicksand-Bold.ttf" as="font"crossOrigin=""/>       
            <link rel="preload" href="/fonts/quicksand/Quicksand-Light.ttf" as="font" crossOrigin="" />
            <link rel="preload" href="/fonts/quicksand/Quicksand-Regular.ttf" as="font" crossOrigin="" />     
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
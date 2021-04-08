import Head from 'next/head';

const DefaultLayout = ({
    children
}) => {

    var SITE_NAME = 'JAWNZ';

    return (
        <>
            <Head>
                <link rel="preload" href="/fonts/quicksand/Quicksand-Bold.ttf" as="font"crossOrigin=""/>       
                <link rel="preload" href="/fonts/quicksand/Quicksand-Light.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/quicksand/Quicksand-Regular.ttf" as="font" crossOrigin="" />     
            </Head>
            <main className='site-content'>{children}</main>
        </>
    );
}

export default DefaultLayout;
// dependencies
import Head from 'next/head';

import { Header, Sidebar } from '../components/layout';


const NotesLayout = ({
    children,
    content
}) => {

    var SITE_NAME = 'JAWNZ';

    return (
        <>
            <Head>
                <link rel="preload" href="/fonts/quicksand/Quicksand-Bold.ttf" as="font"crossOrigin=""/>       
                <link rel="preload" href="/fonts/quicksand/Quicksand-Light.ttf" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/quicksand/Quicksand-Regular.ttf" as="font" crossOrigin="" />     
            </Head>

            <Header id='header-nav' />
            <Sidebar id='side-nav' content={content} />
            <main className='site-content'>{children}</main>
        </>
    );
}

export default NotesLayout;
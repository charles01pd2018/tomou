// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
// layout
import { AppLayout } from '../../layout';
// components
import { CenterPanel, NotAuth } from '../../components'


const AppDashboard = ({
    content: { title='', description='', centerPanelContent={} }
}) => {

    const [ session, loading ] = useSession();
    if ( loading ) return null;
    if ( !session && !loading ) return <NotAuth id='not-auth' />

    return (
        <>
            <Head>
                <title>tomou App Dashboard</title>
            </Head>
            <AppLayout user={session.user}>
                <div className='screen-container text-center'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <CenterPanel id='app-navigation' content={centerPanelContent} />
                </div>
            </AppLayout>
        </>
    );
}

export default AppDashboard;


const AppDashboardContent = {
    title: 'App Dashboard',
    description: 'Navigate to all app functionality, also see summary overview',
    centerPanelContent: {
        navLinks: [
            {
              linkText: 'Take me home, friend',
              linkDestination: '/'
            },
          ],
    }
};

export async function getStaticProps() {
    return {
        props: {
            content: AppDashboardContent,
        }
    }
}
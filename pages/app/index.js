// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
// layout
import { AppLayout } from '../../layout';
// components
import { CenterPanel } from '../../components'

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


const AppDashboard = ({
    content: { title='', description='', centerPanelContent={} }
}) => {

    const [ session, loading ] = useSession(); // this is going to break if the user is not logged in

    if ( !session ) return (
        <h1>Big Sad</h1>
    );

    return (
        <AppLayout user={session.user}>
            <div className='screen-container center'>
                <Head>
                    <title>tomou App Dashboard</title>
                </Head>

                <h1>{title}</h1>
                <p>{description}</p>
                <CenterPanel id='app-navigation' content={centerPanelContent} />
            </div>
        </AppLayout>
    );
}

export default AppDashboard;


export async function getStaticProps() {

    return {
        props: {
            content: AppDashboardContent,
        }
    }
}
// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
// layout
import { AppLayout } from '../../../layout';

const TasksDashboardContent = {
    title: 'Tasks Dashboard',
    description: 'Keep track of all your tasks :-D',
};


const TasksDashboard = ({
    content: { title='', description=''}
}) => {

    const [ session, loading ] = useSession(); // this is going to break if the user is not logged in

    if ( loading ) return null;

    return (
        <AppLayout user={session.user}>
            <div className='screen-container center'>
                <Head>
                    <title>tomou App Dashboard</title>
                </Head>

                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </AppLayout>
    );
}

export default TasksDashboard;


export async function getStaticProps() {

    return {
        props: {
            content: TasksDashboardContent,
        }
    }
}
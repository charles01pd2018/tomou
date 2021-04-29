// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
// layout
import { AppLayout } from '../../../layout';
// components
import { TasksList } from '../../../components';


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
        <>
            <Head>
                <title>tomou App Dashboard</title>
            </Head>
            <AppLayout user={session.user}>
                <div className='screen-container text-center'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <TasksList id='tasks-list' />
            </AppLayout>
        </>
    );
}

export default TasksDashboard;


export function getStaticProps() {
    return {
        props: {
            content: TasksDashboardContent,
        }
    }
}
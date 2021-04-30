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
    tasksListContent: {
        taskList: [
            {
                task: 'Do homework',
                subTaskList: [
                    {
                        task: 'Math',
                        subTaskList: [
                            {
                                task: 'i am sad'
                            },
                        ]
                    },
                ]
            },
            {
                task: 'workout',
            },
            {
                task: 'Write a really long task to see how it would appear on the screen and see what it would look like so you know what it would look like. Write a really long task to see how it would appear on the screen and see what it would look like so you know what it would look like',
                subTaskList: [
                    {
                        task: 'Hahahahhahahh',
                    },
                ]
            },
        ]
    }
};


const TasksDashboard = ({
    content: { title='', description='', tasksListContent={} }
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
                <TasksList id='tasks-list-main' content={tasksListContent} />
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
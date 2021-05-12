// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
// layout
import { AppLayout } from '../../../layout';
// components
import { TasksList, TasksViewToggler, NotAuth } from '../../../components';


const TasksDashboard = ({
    content: { title='', description='', tasksListContent={} }
}) => {

    const [ session, loading ] = useSession();
    if ( loading ) return null;
    if ( !session && !loading ) return <NotAuth id='not-auth' />

    const [ tasks, setTasks ] = useState( tasksListContent.taskList );

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
                <TasksViewToggler />
                <TasksList id='tasks-list-main' content={{taskList: tasks}} setTasks={setTasks} />
            </AppLayout>
        </>
    );
}

export default TasksDashboard;

/* CONTENT */
const TasksDashboardContent = {
    title: 'Tasks Dashboard',
    description: 'Keep track of all your tasks :-D',
    tasksListContent: {
        taskList: [
            {
                _id: 'task-1',
                task: 'Do homework',
                subTaskList: [
                    {
                        _id: 'task-1-1',
                        task: 'Math',
                        subTaskList: [
                            {
                                _id: 'task-1-1-1',
                                task: 'i am sad'
                            },
                        ]
                    },
                ]
            },
            {
                _id: 'task-2',
                task: 'workout',
            },
            {
                _id: 'task-3',
                task: 'Write a really long task to see how it would appear on the screen and see what it would look like so you know what it would look like. Write a really long task to see how it would appear on the screen and see what it would look like so you know what it would look like',
                subTaskList: [
                    {
                        _id: 'task-3-1',
                        task: 'Hahahahhahahh',
                    },
                ]
            },
        ]
    }
};

export function getStaticProps() {
    return {
        props: {
            content: TasksDashboardContent,
        }
    }
}
// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
// layout
import { AppLayout } from '../../../layout';
// components
import { IconsButtons, NotAuth } from '../../../components';
import { TasksList, TasksGrid, TasksCalendar } from '../../../components/tasks';


const TasksDashboard = ({
    content: { title='', description='', tasksListContent={}, iconsButtonsContent={} }
}) => {

    /* SESSION */
    const [ session, loading ] = useSession();
    if ( loading ) return null;
    if ( !session && !loading ) return <NotAuth id='not-auth' />

    /* HOOKS */
    const [ tasks, setTasks ] = useState( tasksListContent );
    const [ tasksView, setTasksView ] = useState( iconsButtonsContent.defaultIconButton );
    
    /* FUNCTIONS */
    const handleRemoveTask = ( id, setSubList ) => {
        if ( setSubList ) setSubList( false );

        setTasks( ( tasksListContent ) => {
            const newTasksList = tasksListContent.taskList.filter( function filterTaskList( taskItem ) {
                if ( taskItem.subTaskList ) taskItem.subTaskList = taskItem.subTaskList.filter( filterTaskList );
                if ( taskItem._id !== id ) return true;
            } );

            return {
                taskList: newTasksList,
            }
        } );
    }

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
                <IconsButtons id='tasks-views-toggler' content={iconsButtonsContent} currentButton={tasksView} setState={setTasksView} />
                <TasksList id='list' content={tasks} setTasks={handleRemoveTask} />
                <TasksGrid id='grid' />
                <TasksCalendar id='calendar' />
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
    },
    iconsButtonsContent: {
        defaultIconButton: 'list',
        iconsButtonsTypes: [
            'grid',
            'calendar',
        ],
    },
};

export function getStaticProps() {
    return {
        props: {
            content: TasksDashboardContent,
        }
    }
}
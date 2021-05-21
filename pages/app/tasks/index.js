// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { nanoid } from 'nanoid';
// layout
import { AppLayout } from '../../../layout';
// components
import { IconsButtons, NotAuth, Modal } from '../../../components';
import { TasksList, TasksGrid, TasksCalendar } from '../../../components/tasks';

/* SCHEMAS */
const TASK_DETAILS = gql`
    fragment TaskDetails on Task {
        _id
        name
        subTaskList
        dueDate
        tags
    }
`

const GET_TASKS = gql `
    query GetTasks {
        taskList {
            ...TaskDetails
        }
    }
    ${TASK_DETAILS}
`

const DELETE_TASK = gql`
    mutation DeleteTask {
        deleteTask {
            ...TaskDetails
        }
    }
    ${TASK_DETAILS}
`


const TasksDashboard = ( {
    content: { title='', description='', modalContent={}, tasksListContent={}, iconsButtonsContent={} }
} ) => {

    /* SESSION */
    const [ session, loading ] = useSession();
    if ( loading ) return null;
    if ( !session && !loading ) return <NotAuth id='not-auth' />

    /* HOOKS */
    const [ tasks, setTasks ] = useState( tasksListContent );
    const [ tasksView, setTasksView ] = useState( iconsButtonsContent.defaultIconButton );
    
    /* QUERIES */
    const { 
        loading: taskListLoading,
        error: taskListError,
        data: taskListData, } = useQuery( GET_TASKS );

    /* MUTATIONS */
    const [ deleteTask ] = useMutation( DELETE_TASK, {
        update( cache, { data: { newTaskList } } ) {
            const { taskList } = cache.readQuery( { query: GET_TASKS } );
            cache.writeQuery( { 
                query: GET_TASKS,
                data: { taskList: newTaskList },
            } );
        }
    } )

    /* FUNCTIONS */
    const handleRemoveTask = ( id, setSubList ) => {
        if ( setSubList ) setSubList( false );

        setTasks( ( { taskList } ) => {
            const newTasksList = taskList.filter( function filterTaskList( taskItem ) {
                if ( taskItem.subTaskList ) taskItem.subTaskList = taskItem.subTaskList.filter( filterTaskList );
                if ( taskItem._id !== id ) return true;
            } );

            return {
                taskList: newTasksList,
            }
        } );
    }

    const handleAddTask = ( input ) => {
        const newTask = {
            _id: nanoid(12),
            ...input,
        }
        
        setTasks( ( { taskList } ) => {
            return {
                taskList: [ newTask, ...taskList ],
            }
        } )
    }

    console.log( taskListData );

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
                <div className='screen-container text-center'>
                    <Modal id='add-task' content={modalContent} onSubmit={handleAddTask} />
                </div>
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
    modalContent: {
        label: 'Task Name',
        submitText: 'Create Task',
        buttonContent: {
            text: 'Add Task',
        }
    },
    tasksListContent: {
        taskList: [
            {
                _id: 'task-1',
                name: 'Do homework',
                subTaskList: [
                    {
                        _id: 'task-1-1',
                        name: 'Math',
                        subTaskList: [
                            {
                                _id: 'task-1-1-1',
                                name: 'i am sad'
                            },
                        ]
                    },
                ]
            },
            {
                _id: 'task-2',
                name: 'workout',
            },
            {
                _id: 'task-3',
                name: 'Write a really long task to see how it would appear on the screen and see what it would look like so you know what it would look like. Write a really long task to see how it would appear on the screen and see what it would look like so you know what it would look like',
                subTaskList: [
                    {
                        _id: 'task-3-1',
                        name: 'Hahahahhahahh',
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
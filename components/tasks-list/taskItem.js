// dependencies
import { useState } from 'react';
import classNames from 'classnames';
// partials
import TaskList from './taskList';


const TaskItem = ({
    content: { _id, task, subTaskList },
    level,
    setSubList, // setHasSubList hook from parent task
    setTasks, // setTasks hook to rerender all tasks
}) => {

    /* HOOKS */
    const [ itemLevel, setItemLevel ] = useState( level ); // level to be used for styling
    // null, [], [tasks]
    // !( subTaskList == null || subTaskList.length === 0 ) 
    const [ subListActive, setSubListActive ] = useState ( false );
    const [ hasSubList, setHasSubList ] = useState( !( subTaskList == null || subTaskList.length === 0 )  );

    const toggleSubList = () => {
        setSubListActive( subListActive => {
            return !subListActive;
        } );
    }

    const handleRemoveTask = ( id ) => {
        // this is setting everything that has a sublist to false
        // this is right in theory, except that this state is keeping track on then entire list rather than each item
        if ( setSubList ) setSubList( false );

        setTasks( ( { taskList } ) => {
            const newTaskList = taskList.filter( function filterTaskList( taskItem ) {
                if ( taskItem.subTaskList ) taskItem.subTaskList = taskItem.subTaskList.filter( filterTaskList );
                if ( taskItem._id !== id) return true;
            } );

            return { taskList: newTaskList };
        } );
    }

    /* CLASSNAMES */
    const taskItemWrapperClasses = classNames( 'task-item-wrapper', );
    const chevronClasses = classNames( 'chevron ', subListActive ? 'up' : 'down' );

    return (
        <>
            <li className={taskItemWrapperClasses}>
                <div className='task-item-left'>
                    <button className='task-item-complete-toggle' onClick={() => handleRemoveTask(_id)} type='button'>
                        <span className='diamond'></span>
                    </button>
                    {task}
                </div>
                <div className='task-item-right'>
                    {
                        hasSubList && (
                            <button className='task-item-sublist-toggle' onClick={toggleSubList} type='button'>
                                <span className={chevronClasses}></span>
                            </button>
                        )
                    }
                </div>
            </li>
            {
                subTaskList && subListActive && (
                <TaskList 
                content={ { taskList: subTaskList } } 
                level={itemLevel + 1} 
                setSubList={itemLevel !==0 && setHasSubList}
                setTasks={setTasks} /> )
            }
        </>
    );
}

export default TaskItem;
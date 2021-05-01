// dependencies
import { useState } from 'react';
import classNames from 'classnames';
// partials
import TaskList from './taskList';

const TaskItem = ({
    content: { _id, task, subTaskList },
    level,
    setTasks,
}) => {

    /* HOOKS */
    const [ itemLevel, setItemLevel ] = useState( level ); // level to be used for styling
    const [ subListActive, setSubListActive ] = useState ( false );

    const toggleSubList = () => {
        setSubListActive( subListActive => {
            return !subListActive;
        } );
    }

    const handleRemoveTask = ( id ) => {
        setTasks( ( { taskList } ) => {
            const newTaskList = taskList.filter( task => task._id === id );
            return { newTaskList };
        } );
    }

    /* CLASSNAMES */
    const taskItemWrapperClasses = classNames( 'task-item-wrapper', );
    const chevronClasses = classNames( 'chevron ', subListActive ? 'up' : 'down' );

    return (
        <>
            <li className={taskItemWrapperClasses}>
                <div className='task-item-left'>
                    <button className='task-item-complete-toggle' onClick={() => handleRemoveTask(_id)}>
                        <span className='diamond'></span>
                    </button>
                    {task}
                </div>
                <div className='task-item-right'>
                    {
                        subTaskList && (
                            <button className='task-item-sublist-toggle' onClick={toggleSubList}>
                                <span className={chevronClasses}></span>
                            </button>
                        )
                    }
                </div>
            </li>
            {
                subListActive && subTaskList && (
                <TaskList 
                content={ { taskList: subTaskList } } 
                level={itemLevel + 1} 
                setTasks={setTasks} /> )
            }
        </>
    );
}

export default TaskItem;
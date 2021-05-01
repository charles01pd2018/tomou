// dependencies
import { useState, useEffect } from 'react';
import classNames from 'classnames';
// partials
import TaskList from './taskList';

const TaskItem = ({
    content: { task, subTaskList },
    level,
}) => {

    /* HOOKS */
    const [ itemLevel, setItemLevel ] = useState( level ); // level to be used for styling
    const [ subListActive, setSubListActive ] = useState ( false );
    const [ subListRemoved, setSubListRemoved ] = useState( false );

    const toggleSubList = () => {
        setSubListActive( subListActive => {
            if ( subListActive === true ) {
                setSubListRemoved( false );
                return false;
            }
            return true;
        } );
    }

    /* CLASSNAMES */
    const taskItemWrapperClasses = classNames( 'task-item-wrapper', subListRemoved ? 'sublist-active' : 'sublist-removed' );

    useEffect( () => {
        return () => {
            setSubListRemoved( true );
        }
    } );

    return (
        <>
            <li className={taskItemWrapperClasses}>
                <div className='task-item-text'>{task}</div>
                <div className='task-item-icons-wrapper'>
                    {
                        subTaskList && (
                            <button className='task-item-toggle' onClick={toggleSubList}>
                                icon
                            </button>
                        )
                    }
                </div>
            </li>
            {
                subListActive && subTaskList && (
                <TaskList content={ { taskList: subTaskList } } level={itemLevel + 1} /> )
            }
        </>
    );
}

export default TaskItem;
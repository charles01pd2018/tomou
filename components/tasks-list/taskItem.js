// dependencies
import { useState } from 'react';
import classNames from 'classnames';
// partials
import TaskList from './taskList';


const TaskItem = ( {
    content: { _id, task, subTaskList },
    level,
    setSubList, // setHasSubList hook from parent task
    setTasks, // setTasks hook to rerender all tasks
} ) => {

    /* HOOKS */
    const [ itemLevel, setItemLevel ] = useState( level ); // level to be used for styling
    const [ subListActive, setSubListActive ] = useState ( false );
    const [ hasSubList, setHasSubList ] = useState( !( subTaskList == null || subTaskList.length === 0 ) );

    const toggleSubList = () => {
        setSubListActive( subListActive => {
            return !subListActive;
        } );
    }

    /* CLASSNAMES */
    const taskItemWrapperClasses = classNames( 'task-item-wrapper', );
    const chevronClasses = classNames( 'chevron ', subListActive ? 'up' : 'down' );

    return (
        <>
            <li className={taskItemWrapperClasses}>
                <div className='task-item-left'>
                    <button className='task-item-complete-toggle' onClick={() => setTasks(_id, setSubList)} type='button'>
                        <span className='diamond'></span>
                    </button>
                    {task}
                </div>
                <div className='task-item-right'>
                    <label htmlFor='cars' className='hide'>Something</label>
                {/* <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select> */}
                    {
                        hasSubList && (
                        <button className='task-item-sublist-toggle' onClick={toggleSubList} type='button'>
                            <span className={chevronClasses}></span>
                        </button> )
                    }
                </div>
            </li>
            {
                hasSubList && subListActive && (
                <TaskList
                content={ { taskList: subTaskList } } 
                level={itemLevel + 1} 
                setSubList={setHasSubList}
                setTasks={setTasks} /> )
            }
        </>
    );
}

export default TaskItem;
// dependencies
import { useState } from 'react';
import classNames from 'classnames';
// components
import CalendarPopup from '../../calendar-popup';
// partials
import TaskList from './taskList';
// elements
import { Textarea } from '../../elements';


const TaskItem = ( {
    content: { _id, name, subTaskList },
    level,
    setSubList, // setHasSubList hook from parent task
    setTasks, // setTasks hook to rerender all tasks
} ) => {

    /* HOOKS */
    const [ taskName, setTaskName ] = useState( name );
    const [ itemLevel, setItemLevel ] = useState( level ); // level to be used for styling
    const [ subListActive, setSubListActive ] = useState ( false );
    const [ hasSubList, setHasSubList ] = useState( !( subTaskList == null || subTaskList.length === 0 ) );

    /* FUNCTIONS */
    const toggleSubList = () => {
        setSubListActive( subListActive => !subListActive );
    }

    const handleTaskNameChange = ( event ) => {
        setTaskName( event.target.value );
    }

    /* CLASSNAMES */
    const taskItemWrapperClasses = classNames( 'task-item-wrapper', );
    const chevronClasses = classNames( 'chevron shape', subListActive ? 'up' : 'down' );


    return (
        <>
            <li className={taskItemWrapperClasses}>
                <div className='task-item-left'>
                    <button className='task-item-complete-toggle' onClick={() => setTasks(_id, setSubList)} type='button'>
                        <span className='diamond'></span>
                    </button>
                    <Textarea className='task-name' value={taskName} onChange={handleTaskNameChange} />
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
                        hasSubList ? (
                        <button className='task-item-sublist-toggle' onClick={toggleSubList} type='button'>
                            <span className={chevronClasses}></span>
                        </button> ) : (
                        <button className='task-item-sublist-add' onClick={() => {}} type='button'>
                            <span className='plus alt shape'></span>
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
// dependencies
import { useState } from 'react';
// partials
import TaskList from './taskList';

const TaskItem = ({
    content: { task, subTaskList },
    level,
}) => {

    const [ itemLevel, setItemLevel ] = useState( level ); // level to be used for styling
    const [ loadSubList, setLoadSubList ] = useState ( false ); // dont show sublists on initial render

    const toggleSubList = () => {
        setLoadSubList( state => !state );
    }

    return (
        <>
            <button className='task-item-wrapper' onClick={toggleSubList}>
                <li className='task-item'>{task}</li>
            </button>
            {
                loadSubList &&
                subTaskList && <TaskList content={ { taskList: subTaskList } } level={itemLevel + 1} />
            }
        </>
    );
}

export default TaskItem;
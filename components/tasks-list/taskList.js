// dependencies
import { useState } from 'react';
// partials
import TaskItem from './taskItem';


const TaskList = ( {
    content: { taskList=[] },
    level=0, // because this a recursive component, the level tracks how deep in the rerender cycle we are
}) => {

    const [ listLevel, setListLevel ] = useState( level );

    return (
        <ul className='tasks-list-wrapper'>
            {
                taskList.map( ( { task, subTaskList }, index ) => {
                    return (
                        <TaskItem key={`task-${index}-${level}`}
                        content={ { task, subTaskList } } 
                        level={listLevel} />
                    );
                } )
            }
        </ul>
    );
}

export default TaskList;
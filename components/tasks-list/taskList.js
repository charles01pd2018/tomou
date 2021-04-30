// dependencies
import { useState } from 'react';

const TaskList = ( {
    content: { taskList=[] },
    level=0, // because this a recursive component, the level tracks how deep in the rerender cycle we are
}) => {
    
    const [ currentLevel, setCurrentLevel ] = useState( level );

    console.log( currentLevel );

    return (
        <ul className='tasks-list-wrapper'>
            {
                taskList.map( ( { task, subTaskList }, index ) => {
                    return (
                        <div key={`task-${index}-${level}`}>
                            <li className='task-item'>
                                {task}
                            </li>
                            {
                                subTaskList && <TaskList content={ { taskList: subTaskList } } level={currentLevel + 1} />
                            }
                        </div>
                    
                    );
                } )
            }
        </ul>
    );
}

export default TaskList;
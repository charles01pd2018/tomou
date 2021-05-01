// dependencies
import { useState } from 'react';
// partials
import TaskItem from './taskItem';


const TaskList = ( {
    content: { taskList=[] },
    level=0, // because this a recursive component, the level tracks how deep in the rerender cycle we are
}) => {

    const [ currentLevel, setCurrentLevel ] = useState( level );
    const [ loadSubTasks, setLoadSubTasks ] = useState ( false ); // don't load the initial subtasks on initial render

    const toggleSubTaskVisibility = () => {
        setCurrentLevel( state => {
            setLoadSubTasks( true );

            if ( currentLevel === 0 ) return state + 1;
            return state - 1;
        } );
    }

    return (
        <ul className='tasks-list-wrapper'>
            {
                taskList.map( ( { task, subTaskList }, index ) => {
                    return (
                        <div key={`task-${index}-${level}`}>
                            <TaskItem content={ { task } } level={level} onClick={toggleSubTaskVisibility}/>
                            {
                                currentLevel === 0 && loadSubTasks && 
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
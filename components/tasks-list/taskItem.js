// dependencies
import { useState, useCallback } from 'react';

const TaskItem = ({
    content: { task },
    level,
    onClick,
}) => {

    const [ currentLevel, setCurrentLevel ] = useState( level ); // level to be used for styling
    const [ taskVisible, setTaskVisible ] = useState( currentLevel === 0 ); // this will make sure all subtasks are hidden on initial render

    const toggleVisibility = useCallback( () => {
        setTaskVisible( state => !state );
    }, [ currentLevel, setCurrentLevel] );

    return (
        <>
            <button className='task-item-wrapper' onClick={onClick}>
                <li className='task-item'>{task}</li>
            </button>
        </>
    );
}

export default TaskItem;
// dependencies
import { useState } from 'react';
import classNames from 'classnames';

const TASKS_VIEWS = [
    'list',
    'grid',
    'calendar',
];

const TasksViewToggler = ({
    id,
    setState,
}) => {

    /* HOOKS */
    const [ tasksView, setTasksView ] = useState( TASKS_VIEWS[0] );

    const handleSetTasksView = ( viewType ) => {
        setTasksView( viewType );
    }

    console.log( tasksView );

    return (
        <section id={id} className='tasks-view-toggler-container'>
            <div className='tasks-view-toggler-wrapper'>
                <div className='tasks-view-toggler-item-wrapper'>
                    {
                        TASKS_VIEWS.map( ( viewType ) => {
                            const iconAltText = `${viewType} icon`;
                            const taskIconButtonClasses = classNames( 'tasks-view-toggler-item', tasksView === viewType && 'task-view-active' );
                            return (
                                <button className={taskIconButtonClasses} onClick={() => handleSetTasksView(viewType)}>
                                    <object className='tasks-view-toggler-icon' type="image/svg+xml" data={`/static/icons/${viewType}.svg`} alt={iconAltText}>
                                        {iconAltText}
                                    </object>
                                </button>
                            );
                        } )
                    }
                </div>
            </div>
        </section>
    );
}

export default TasksViewToggler;
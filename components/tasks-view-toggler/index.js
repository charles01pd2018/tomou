
const TASKS_VIEWS = [
    'list',
    'grid',
    'calendar',
]

const TasksViewToggler = ({
    id,
    setTasksView
}) => {

    const handleSetTasksView = () => {

    }

    return (
        <section id={id} className='tasks-view-toggler-container'>
            <div className='tasks-view-toggler-wrapper'>
                <div className='tasks-view-toggler-item-wrapper'>
                    {
                        TASKS_VIEWS.map( ( viewType ) => {
                            const iconAltText = `${viewType} icon`
                            return (
                                <button className='tasks-view-toggler-item' onClick={handleSetTasksView}>
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
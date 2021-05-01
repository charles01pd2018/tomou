const TasksViewToggler = ({
    id,
    content
}) => {

    const TASKS_VIEWS = [
        'list',
        'cards',
        'calendar',
    ]

    return (
        <section id={id} className='tasks-view-toggler'>
            Tasks View Toggler
        </section>
    );
}

export default TasksViewToggler;
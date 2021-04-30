// partials
import TasksSorter from './tasksSorter';
import TaskList from './taskList';


const TasksList = ({
    id,
    content
}) => {

    return (
        <section id={id} className='tasks-list-container'>
            <TaskList content={content} />
        </section>
    );
}

export default TasksList;
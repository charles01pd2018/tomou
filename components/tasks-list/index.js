// partials
import TasksSorter from './tasksSorter';
import TaskList from './taskList';


const TasksList = ({
    id,
    content,
    setTasks
}) => {

    return (
        <section id={id} className='tasks-list-container'>
            <TaskList content={content} setTasks={setTasks} />
        </section>
    );
}

export default TasksList;
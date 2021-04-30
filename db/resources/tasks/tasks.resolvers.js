
const RESOURCE_NAME = 'tasks'

const task = (_, { id }, { db: { mongo } } ) => {
    return {
        name: 'this is a task'
    };
}

const miniTaskList = (_, __, { db: { mongo } } ) => {
    return [
        'task 1',
        'task 2',
    ];
}

const taskList = () => {
    return [
        'yuh',
    ];
}

const allTasks = () => {
    return [
        'beep boop'
    ];
}

const tasksResolvers = {
    Query: {
        task,
        miniTaskList,
        taskList,
        allTasks,
    }
}

export default tasksResolvers;
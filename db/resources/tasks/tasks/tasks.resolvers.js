
const RESOURCE_NAME = 'tasks'

const task = (_, { id }, { db: { mongo } } ) => {
    return {
        name: 'this is a task'
    };
}

const taskList = (_, __, { db: { mongo } } ) => {
    return [
        'task 1',
        'task 2',
    ];
}

const tasksResolvers = {
    Query: {
        task,
        taskList,
    }
}

export default tasksResolvers;
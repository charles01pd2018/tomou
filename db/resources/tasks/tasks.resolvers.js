
const RESOURCE_NAME = 'tasks'

const getTasksList = (_, __, { db: { mongo } } ) => {
    return [
        'task 1',
        'task 2',
    ];
}

const getTask = (_, { id }, { db: { mongo } } ) => {
    return {
        name: 'this is a task'
    };
}


export default tasksSchemas = {
    Query: {
        getTasksList,
        getTask
    }
}
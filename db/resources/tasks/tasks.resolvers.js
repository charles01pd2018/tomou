
/* TASKS RESOURCE */
const TASKS_RESOURCE_NAME = 'tasks';

const taskList = ( _, __, { db: { mongo }, user } ) => {
    return mongo.mongoDB.collections( TASKS_RESOURCE_NAME ).find( {
        userID: user.id,
    } ).toArray();
}

const deleteTask = ( _, { input }, { db: mongo } ) => {
    return mongo.mongoDB.collections( TASKS_RESOURCE_NAME ).findOneAndDelete(
        { ...input },
        { maxTimeMS: 5 },
    ).then( ( { ops } ) => ops [ 0 ] );
}


const tasksResolvers = {
    Query: {
        taskList,
    },
    Mutation: {
        deleteTask,
    }
}

export default tasksResolvers;
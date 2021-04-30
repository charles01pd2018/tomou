import gql from 'gql-tag';

const tasksSchemas = gql`
    type Task {
        _id: ID!
        name: String!
        subTaskList: [Task!]
    }

    extend type Query {
        "Returns an individual task"
        task: Task!
        "Returns the task list only including the ids of the subtasks"
        miniTaskList: [Task]!
        "Returns the task and all subtasks content"
        taskList: [Task]!
        "Returns all tasks associated with the user"
        allTasks: [Task]!
    }
`

export default tasksSchemas;
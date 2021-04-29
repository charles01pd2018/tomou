import gql from 'gql-tag';

export default TasksSchemas = gql`
    type Task {
        name: String!
    }

    type Query {
        taskList: [Task]!
        task: Task!
    }
`
import gql from 'gql-tag';

const tasksSchemas = gql`
    type Task {
        name: String!
    }

    extend type Query {
        task: Task!
        taskList: [Task]!
    }
`

export default tasksSchemas;
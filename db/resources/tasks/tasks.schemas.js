import gql from 'gql-tag';

const tasksSchemas = gql`
    type Task {
        _id: ID!
        name: String!
        subTaskList: [Task]
        dueDate: String
        tags: [String]
    }

    input DeleteTaskInput {
        _id: ID!
    }

    extend type Query {
        taskList: [Task]!
    }

    extend type Mutation {
        deleteTask(input: DeleteTaskInput): Task!
    }
`

export default tasksSchemas;
// dependencies
import gql from 'gql-tag';
// schemas
import tasksSchemas from './tasks/tasks.schemas';
import storageSchemas from './storage/storage.schemas';

export {
    tasksSchemas,
    storageSchemas,
}

const rootSchema = gql`
    type Query {
        _empty: String
    }

    type Mutation { 
        _empty: String
    }
`

const allSchemas = [
    rootSchema,
    tasksSchemas,
    storageSchemas,
];

export default allSchemas;
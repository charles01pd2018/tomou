// dependencies
import { merge } from 'lodash';
// resolvers
import tasksResolvers from './tasks/tasks.resolvers';
import storageResolvers from './storage/storage.resolvers';

export {
    tasksResolvers,
    storageResolvers,
}

const allResolvers = merge(
    tasksResolvers,
    storageResolvers,
);

export default allResolvers;
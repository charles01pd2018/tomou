// dependencies
import { merge } from 'lodash';
// resolvers
import tasksResolvers from './tasks/tasks.resolvers';

export {
    tasksResolvers,
}

const allResolvers = merge(
    tasksResolvers,
);

export default allResolvers;
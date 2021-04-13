import nc from 'next-connect';
import onMongoDbConnect from './db';
import onAuth from './auth';

const middleware = nc();

middleware.use( onMongoDbConnect )
    .use( onAuth );

export default middleware;
// dependencies
import nc from 'next-connect';
//middleware
import { onAuth } from './auth';


const middleware = nc();

middleware.use( onAuth );

export default middleware;
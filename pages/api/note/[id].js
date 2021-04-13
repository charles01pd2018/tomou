// dependencies
import nc from 'next-connect';
// database
import middleware from '../../../db/middleware/all';
import { note } from '../../../db/resources';
import { onError } from '../../../db/middleware/error';

const handler = nc({
    onError,
});

handler.use(middleware);

handler.put( async ( req, res ) => {
    const updatedNote = await note.updateNote( req.db, req.query.id, req.body );

    res.send( { data: updatedNote } );
});

export default handler;

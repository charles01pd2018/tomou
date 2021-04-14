// dependencies
import nc from 'next-connect'
//database
import { onError } from '../../../db/middleware/error';
import middleware from '../../../db/middleware/all';
import { note } from '../../../db/resources';


const handler = nc({
  onError,
});

handler.use( middleware );

/* POST */
handler.post( async ( req, res ) => {
  const newNote = await note.createNote( req.db, {
    createdBy: req.user.id,
    folder: req.body.folder,
    name: req.body.name,
  } );

  res.send( { data: newNote } );
});

export default handler;
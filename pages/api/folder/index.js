// dependencies
import nc from 'next-connect'
// database
import middleware from '../../../db/middleware/all';
import { folder } from '../../../db/resources';
import { onError } from '../../../db/middleware/error';


const handler = nc({
  onError,
});

handler.use( middleware );

/* POST */
handler.post( async ( req, res ) => {
  const newFolder = await folder.createFolder( req.db, {
    createdBy: req.user.id,
    name: req.body.name,
  } );

  res.send( { data: newFolder } );
} );

export default handler;
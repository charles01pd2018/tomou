// dependencies
import nc from 'next-connect'

const handler = nc();

handler.get( (req, res) => {
  res.send( { message: 'welcome to toumou api' } )
});

export default handler;
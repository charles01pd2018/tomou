import nc from 'next-connect'

const handler = nc()
  .get( (req, res) => {
    res.json( { user: 'this is where hush hush user info will be sent' } )
  })

export default handler;
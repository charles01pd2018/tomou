import nc from 'next-connect'

const handler = nc()
  .get( (req, res) => {
    res.json( { message: 'welcome to toumou api' } )
  })

export default handler;
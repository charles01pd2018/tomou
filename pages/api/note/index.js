import nc from 'next-connect'

const handler = nc()
  .get( (req, res) => {
    res.json( { message: 'this where you will find the note you are requesting' } )
  })
  .post((req, res) => {
    const id = Date.now()
    const note = { ...req.body, id }

    res.json( { data: note } )
  })
  

export default handler;
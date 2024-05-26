import express from 'express'
import db from '../services/deleteServices.js'

const router = express.Router()

router.delete('/', async (request, response) => {
    const {id} = request.body
    
    if(id === undefined ){
        return(response.status(422).send('Campo em branco'))
    }
else{
  await db.delet(id)
  response.status(200).send('deletado')

}
})

export default router
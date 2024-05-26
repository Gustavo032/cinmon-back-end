import express from 'express'
import db from '../services/alterarServices.js'

const router = express.Router()

router.put('/', async (request, response) => {
    const {smp, veiculo, motorista, telefone, f, ag,au,entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs,id,} = request.body
    console.log(smp, veiculo, motorista, telefone, f, ag,au,entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs,id)

    if(id === undefined || id === "" ){
        return(response.status(422).send('Campo em branco'))
    }
else{
  await db.alterar(smp, veiculo, motorista, telefone, f,ag,au, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs,id)
  response.status(200).send('alterado')
}})
export default router
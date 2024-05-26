import express from 'express'
import db from '../services/cadastroServices.js'

const router = express.Router()

router.post('/', async (request, response) => {
    const {smp, veiculo, motorista, telefone, f,ag,au, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs} = request.body

    try{
        if(smp === '' || veiculo === '' || motorista === '' || telefone  === '' || f === '' || ag === '' || au === '' || entrega === '' || tecn === '' || valor === '' || isca === '' || datainicio === '' || datafinal === '' || destino === '' || status === '' || obs === ''){
            response.status(422).send("Campo em branco")
          }
          else{
            await db.createUser(smp, veiculo, motorista, telefone, f,ag,au, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs)
            response.status(200).send("Cadastro realizado")
            console.log(motorista,ag,au)
          }
    }catch{
        return((response.status(500).send("Error")))
      }
    })

export default router
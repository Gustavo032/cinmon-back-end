import express from 'express'
//  Rotas:

//  feito
import cadastro from './controller/cadastroController.js'
import select from './controller/selectController.js'
import alterar from './controller/alterarController.js'

//  fazendo
import filtro from './controller/filtroController.js'
import delet from './controller/deleteController.js'

//express
 const router = express()

// feito
router.use('/cadastro', cadastro) 
router.use('/select', select)
router.use('/alterar', alterar)

// fazendo
router.use('/filtro', filtro)
router.use('/delet', delet)

 export default router
// importações e conexão

import express from 'express'
import router from './router.js'
import cors from 'cors'

const api = express()

api.use(cors())

api.use(express.json())

api.use('/',router)

api.listen(3033, () => {
  console.log('Servidor iniciado')
})
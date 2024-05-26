import express from 'express';
import db from '../services/filtroServices.js';

const router = express.Router();

router.get('/', async (request, response) => {
  const { smp, veiculo, motorista, telefone, f, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs } = request.query;

  try {
    const results = await db.filtro(smp, veiculo, motorista, telefone, f, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs);
    if (results.length > 0) {
      response.status(200).json(results);
    } else {
      response.status(404).send('Nenhum resultado encontrado');
    }
  } catch (err) {
    response.status(500).send({ mensagem: 'erro', err: `${err}` });
  }
});

export default router;

import express from 'express'
import db from '../services/alterarServices.js'

const router = express.Router()

router.put('/', async (request, response) => {
	let {smp, veiculo, motorista, telefone, f, ag, au, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs, id} = request.body;
	
	console.log(smp, veiculo, motorista, telefone, f, ag, au, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs, id);

	if (!id) {
			return response.status(422).send('Campo em branco');
	}

	smp = smp || '';
	veiculo = veiculo || '';
	motorista = motorista || '';
	telefone = telefone || '';
	f = f || false;
	ag = ag || false;
	au = au || false;
	entrega = entrega || '';
	tecn = tecn || '';
	valor = valor || '';
	isca = isca || '';
	datainicio = datainicio || '';
	datafinal = datafinal || '';
	destino = destino || '';
	status = status || '';
	obs = obs || '';

	await db.alterar(smp, veiculo, motorista, telefone, f, ag, au, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs, id);
	response.status(200).send('alterado');
});

export default router
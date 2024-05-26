import db from "../repository/connection.js"

async function alterar(smp, veiculo, motorista, telefone, f, ag, au, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs, id) {
  let sql = `UPDATE tbl_viagens SET 
               smp = ?, 
               veiculo = ?, 
               motorista = ?, 
               telefone = ?, 
               f = ?, 
               ag = ?, 
               au = ?, 
               entrega = ?, 
               tecn = ?, 
               valor = ?, 
               isca = ?, 
               datainicio = ?, 
               datafinal = ?, 
               destino = ?, 
               status = ?, 
               obs = ? 
             WHERE id_viagem = ?`;

  const dados = [smp, veiculo, motorista, telefone, f, ag, au, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs, id];

  console.log(sql);
  console.log(dados);

  const conn = await db.connect();

  await conn.query(sql, dados);

  conn.end();
}

export default { alterar };

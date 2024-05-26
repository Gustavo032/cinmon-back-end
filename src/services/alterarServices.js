import db from "../repository/connection.js"

async function alterar(smp, veiculo, motorista, telefone, f, ag, au, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs, id) {
  let sql = 'UPDATE tbl_viagens SET';
  const dados = [];
  
  if (smp) {
    sql += ' smp = ?,';
    dados.push(smp);
  }
  if (veiculo) {
    sql += ' veiculo = ?,';
    dados.push(veiculo);
  }
  if (motorista) {
    sql += ' motorista = ?,';
    dados.push(motorista);
  }
  if (telefone) {
    sql += ' telefone = ?,';
    dados.push(telefone);
  }
  if (f) {
    sql += ' f = ?,';
    dados.push(f);
  }
  if (ag) {
    sql += ' ag = ?,';
    dados.push(ag);
  }
  if (au) {
    sql += ' au = ?,';
    dados.push(au);
  }
  if (entrega) {
    sql += ' entrega = ?,';
    dados.push(entrega);
  }
  if (tecn) {
    sql += ' tecn = ?,';
    dados.push(tecn);
  }
  if (valor) {
    sql += ' valor = ?,';
    dados.push(valor);
  }
  if (isca) {
    sql += ' isca = ?,';
    dados.push(isca);
  }
  if (datainicio) {
    sql += ' datainicio = ?,';
    dados.push(datainicio);
  }
  if (datafinal) {
    sql += ' datafinal = ?,';
    dados.push(datafinal);
  }
  if (destino) {
    sql += ' destino = ?,';
    dados.push(destino);
  }
  if (status) {
    sql += ' status = ?,';
    dados.push(status);
  }
  if (obs) {
    sql += ' obs = ?,';
    dados.push(obs);
  }

  // Remove a última vírgula e adiciona a cláusula WHERE
  sql = sql.slice(0, -1) + ' WHERE id_viagem = ?';
  dados.push(id);

  console.log(sql);
  console.log(dados);

  const conn = await db.connect();

  await conn.query(sql, dados);

  conn.end();
}

export default { alterar };

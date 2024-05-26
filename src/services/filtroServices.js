import db from '../repository/connection.js';

async function filtro(smp, veiculo, motorista, telefone, f, entrega, tecn, valor, isca, datainicio, datafinal, destino, status, obs) {
  let sql = 'SELECT * FROM tbl_viagens WHERE 1=1';
  const params = [];

  if (smp) {
    sql += ' AND LOWER(smp) LIKE ?';
    params.push(`%${smp.toLowerCase()}%`);
  }
  if (veiculo) {
    sql += ' AND LOWER(veiculo) LIKE ?';
    params.push(`%${veiculo.toLowerCase()}%`);
  }
  if (motorista) {
    sql += ' AND LOWER(motorista) LIKE ?';
    params.push(`%${motorista.toLowerCase()}%`);
  }
  if (telefone) {
    sql += ' AND LOWER(telefone) LIKE ?';
    params.push(`%${telefone.toLowerCase()}%`);
  }
  if (f) {
    sql += ' AND LOWER(f) LIKE ?';
    params.push(`%${f.toLowerCase()}%`);
  }
  if (entrega) {
    sql += ' AND LOWER(entrega) LIKE ?';
    params.push(`%${entrega.toLowerCase()}%`);
  }
  if (tecn) {
    sql += ' AND LOWER(tecn) LIKE ?';
    params.push(`%${tecn.toLowerCase()}%`);
  }
  if (valor) {
    sql += ' AND LOWER(valor) LIKE ?';
    params.push(`%${valor.toLowerCase()}%`);
  }
  if (isca) {
    sql += ' AND LOWER(isca) LIKE ?';
    params.push(`%${isca.toLowerCase()}%`);
  }
  if (datainicio) {
    sql += ' AND LOWER(datainicio) LIKE ?';
    params.push(`%${datainicio.toLowerCase()}%`);
  }
  if (datafinal) {
    sql += ' AND LOWER(datafinal) LIKE ?';
    params.push(`%${datafinal.toLowerCase()}%`);
  }
  if (destino) {
    sql += ' AND LOWER(destino) LIKE ?';
    params.push(`%${destino.toLowerCase()}%`);
  }
  if (status) {
    sql += ' AND LOWER(status) LIKE ?';
    params.push(`%${status.toLowerCase()}%`);
  }
  if (obs) {
    sql += ' AND LOWER(obs) LIKE ?';
    params.push(`%${obs.toLowerCase()}%`);
  }

  const conn = await db.connect();
  const [rows] = await conn.query(sql, params);
  conn.end();

  return rows;
}

export default { filtro };

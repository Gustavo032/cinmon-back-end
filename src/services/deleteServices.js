import db from '../repository/connection.js';

async function delet(id){

    const sql = 'DELETE FROM tbl_viagens WHERE id_viagem = ?';

    const dados = [id];

    const conn = await db.connect();

    conn.query(sql, dados);
    conn.end();
}
export default {delet};
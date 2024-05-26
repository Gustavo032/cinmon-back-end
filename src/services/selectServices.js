import db from '../repository/connection.js'

async function select(){
    const sql = "Select * FROM tbl_viagens";
    const conn = await db.connect();
    const [rows] = await conn.query(sql)
    conn.end();

    return rows
}

export default {select};
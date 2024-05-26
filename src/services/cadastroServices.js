import db from '../repository/connection.js';

async function createUser(smp, veiculo, motorista, telefone, f,ag,au, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs) { 
    const sql = 'INSERT INTO tbl_viagens (smp, veiculo, motorista, telefone, f,ag,au, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs) VALUES(?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'; 
    
    const dados = [smp, veiculo, motorista, telefone, f,ag,au, entrega,tecn,valor,isca,datainicio,datafinal,destino,status,obs];

    const conn = await db.connect();
    
    conn.query(sql, dados);
    conn.end();
}
export default {createUser};
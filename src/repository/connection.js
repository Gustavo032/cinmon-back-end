// Conexão com o banco abaixo é um modelo tem que fazer um banco para testar

import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection(
 { 
        database: 'monitoramento',
        user: 'root',
        port : 3306,
        host: 'localhost',
        password: ''
   }
)

    return connection;
};

export default {connect};
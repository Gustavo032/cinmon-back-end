// Conexão com o banco abaixo é um modelo tem que fazer um banco para testar

import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection(
 { 
        database: 'monitoramento',
        user: 'cinmon',
        port : 4001,
        host: '62.72.63.39',
        password: 'Mud@r032'
   }
)

    return connection;
};

export default {connect};
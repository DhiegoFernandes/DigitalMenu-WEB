const mysql = require('mysql2');
// require('dotenv').config();

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "guinaty01",
    port: 3306,
    database: "digitalmenu" 
});

connection.getConnection((err, con) => {
    if(err){
        return console.log("Erro na conexao");
    }
    else{
        console.log("Conexao foi um sucesso");
        return con;
    }
})

module.exports = connection.promise();


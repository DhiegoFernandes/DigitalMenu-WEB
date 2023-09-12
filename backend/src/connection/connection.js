const mysql = require('mysql2');
const fs = require('fs');

const cert = __dirname + '/DigiCertGlobalRootCA.crt.pem';

console.log(cert + "  aaaa");
if (fs.existsSync(cert)) {
    const certificado = fs.readFileSync(cert);

    const connection = mysql.createPool({
        host: "senacp.mysql.database.azure.com",
        user: "senacsppi",
        password: "Vonneumann@",
        port: 3306,
        database: "digitalmenu",
        ssl: {
            ca: certificado,
        },
        authSwitchHandler: (data, cb) => {
            if (data.pluginName === 'mysql_clear_password') {
                const password = 'Vonneumann@';
                const encrypted = Buffer.from(password + '\0');
                cb(null, encrypted);
            }
        }
    });


    // Função para envolver a chamada ao .query() em uma promessa
    const queryPromise = (sql, values) => {
        return new Promise((resolve, reject) => {
            connection.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    };

    queryPromise("SELECT 1")
        .then((results) => {
            console.log("Conexão com o banco de dados MySQL foi estabelecida com sucesso.");
        })
        .catch((err) => {
            console.error("Erro ao estabelecer a conexão com o banco de dados:", err);
        });

    module.exports = connection; // Exportar a função de consulta
} else {
    console.error(`O arquivo de certificado CA "${cert}" não foi encontrado.`);
}

const connection = require('./connection');

const pessoasModel = {
    getPessoas: async () => {
        try {
            const [rows, fields] = await connection.execute('SELECT * FROM pessoas');
            return rows; 
        } catch (err) {
            throw err;
        }
    }
};


module.exports = pessoasModel;
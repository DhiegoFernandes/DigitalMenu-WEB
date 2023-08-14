const connection = require('./connection');

const get = {
    getPessoas: async (req, res) => {
        let query = `SELECT * FROM pessoas`;
        const resultado = await connection.query(query);
        return resultado
    }
    
};


module.exports = {
    get
};
const connection = require('./connection');

const authModel = {
    autenticar: async (nome,senha /*, mesa*/) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT * FROM usuarios WHERE nome = ? AND senha = ?',
                [nome,senha]
            );
            return rows;
        }catch(err){
            throw err;
        }
    },

    verificaExistencia: async (nome) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT * FROM usuarios WHERE nome =?',
                [nome]
            );
            return rows.length > 0;
        }catch(err){
            throw err;
        }
    },

    registrar: async (nome,senha) => {
        try{
            const sql = 'INSERT INTO usuarios (nome,senha) VALUES(?,?)';
            await connection.execute(sql, [nome,senha]);
        }catch(err){
            throw err;
        }
    },

    delete: async (nome) => {
        try{
            const sql = 'DELETE FROM usuarios WHERE nome = ?';
            await connection.execute(sql, [nome]);
        }catch(err){
            throw err;
        }
    }
};

module.exports = authModel;
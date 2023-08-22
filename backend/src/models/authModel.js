const connection = require('./connection');

const authModel = {
    autenticar: async (nome,senha /*, mesa*/) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT * FROM usuario WHERE USUARIO = ? AND SENHA = ?',
                [nome,senha]
            );
            return rows;
        }catch(err){
            throw err;
        }
    },

    listarTodosUsuarios: async (nome,tipoacesso,status) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT USUARIO,TIPOACESSO, STATUS FROM usuario;'
            );
        }catch(err){
            throw err;
        }
    },

    buscarPorUsuario: async (nome) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT USUARIO, TIPOACESSO, STATUS FROM usuario WHERE USUARIO = ?',
                [nome]
            );
            if (rows.length > 0) {
                return rows[0]; // Return the first row as the user object
            } else {
                return null; // Return null if user not found
            }
        } catch (err) {
            throw err;
        }
    },

    verificaExistencia: async (nome) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT * FROM usuario WHERE USUARIO =?',
                [nome]
            );
            return rows.length > 0;
        }catch(err){
            throw err;
        }
    },

    registrar: async (nome,senha) => {
        try{
            const sql = 'INSERT INTO usuario (USUARIO,SENHA) VALUES(?,?)';
            await connection.execute(sql, [nome,senha]);
        }catch(err){
            throw err;
        }
    },

    delete: async (nome) => {
        try{
            const sql = 'DELETE FROM usuarios WHERE USUARIO = ?';
            await connection.execute(sql, [nome]);
            return sql;
        }catch(err){
            throw err;
        }
    },
    
    atualizarSenha : async (nome, senha) => {
        try{
            const sql = 'UPDATE usuarios SET senha = ? WHERE USUARIO = ?'
            await connection.execute(sql,[senha,nome]);
        }catch(err){
            throw err;
        }
    }
};

module.exports = authModel;
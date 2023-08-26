const connection = require('../connection/connection');

const UserModel = {
    autenticar: async (nome,senha) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT * FROM usuario WHERE USUARIO = ? AND SENHA = ?;',
                [nome,senha]
            );
            return rows;
        }catch(err){
            throw err;
        }
    },

    listarTodosUsuarios: async () => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT USUARIO, TIPOACESSO, STATUS FROM usuario;'
            );
            return rows;
        }catch(err){
            throw err;
        }
    },

    listarUsuarioAtivos : async() =>{
        try{
            const [rows, fields] = await connection.execute(
                'SELECT USUARIO, TIPOACESSO, STATUS FROM usuario WHERE STATUS = \'ATIVADO\';'
            );
            return rows;
        }catch(err){
            throw err;
        }
    },

    buscarPorUsuario: async (nome) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT USUARIO, TIPOACESSO, STATUS FROM usuario WHERE USUARIO = ?;',
                [nome]
            );
            if (rows.length > 0) {
                return rows[0]; 
            } else {
                return null; 
            }
        } catch (err) {
            throw err;
        }
    },

    listarCategoriaPorNome : async (nome) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT USUARIO, TIPOACESSO, STATUS FROM usuario WHERE usuario LIKE CONCAT(\'%\',?,\'%\');',
                [nome]
            );
            if(rows.length > 0) {
            return rows;
            } else {
                return null;
            }    
        }catch(err){
            throw err;
        }
    },

    verificaExistencia: async (nome) => {
        try{
            const [rows, fields] = await connection.execute(
                'SELECT * FROM usuario WHERE USUARIO =?;',
                [nome]
            );
            return rows.length > 0;
        }catch(err){
            throw err;
        }
    },

    registrar: async (nome,senha,tipoAcesso) => {
        try{
            const sql = 'INSERT INTO usuario (USUARIO,SENHA,TIPOACESSO) VALUES(?,?,?);';
            await connection.execute(sql, [nome,senha,tipoAcesso]);
        }catch(err){
            throw err;
        }
    },

    delete: async (nome) => {
        try{
            const sql = 'DELETE FROM usuarios WHERE USUARIO = ?;';
            await connection.execute(sql, [nome]);
            return sql;
        }catch(err){
            throw err;
        }
    },
    
    atualizarSenha : async (nome, senha) => {
        try{
            const sql = 'UPDATE usuarios SET senha = ? WHERE USUARIO = ?;'
            await connection.execute(sql,[senha,nome]);
        }catch(err){
            throw err;
        }
    }
};

module.exports = UserModel;
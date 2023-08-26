const connection = require('../connection/connection');

const categoriaModel = {
    listarCategoria : async() =>{
        try {
            const[rows,fields] = await connection.execute(
                'SELECT idcategoria, nome, status ' 
                + 'FROM categoria'
            );
            return rows
        } catch (error) {
            throw error;
        }
    },

    listarCategoriaPorId : async(idcategoria)=>{
        try {
            const [rows,fields] = await connection.execute(
                'SELECT idcategoria, nome, status '
                +'FROM categoria '
                +'WHERE idcategoria = ?;',
                [idcategoria]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarPorNome : async(nome)=>{
        try {
            const [rows,fields] = await connection.execute(
                'SELECT idcategoria, nome, status '
                +'FROM categoria '
                +'WHERE nome LIKE CONCAT(\'%\', ?, \'%\');',
                [nome]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarCategoriaAtivas : async() =>{
        try {
            const[rows,fields] = await connection.execute(
                'SELECT idcategoria, nome, status ' 
                + 'FROM categoria '
                + 'WHERE status = \'ATIVADO\';'
            );
            return rows
        } catch (error) {
            throw error;
        }
    },

    listarCategoriasPorstatus : async(status) =>{
        try {
            const[rows,fields] = await connection.execute(
                'SELECT idcategoria, nome, status '
                + 'FROM categoria '
                + 'WHERE status = ?;',
                [status]
            );
            return rows
        } catch (error) {
            throw error;
        }
    },

    criarCategoria : async(nome) =>{
        try {
            const sql = await connection.execute(
                'INSERT INTO categoria (idcategoria, nome, status)'
                + ' VALUES (NULL, ?, DEFAULT);',
                [nome]
            );
        } catch (error) {
            throw error;
        } 
    },


    updateCategoria : async(nome,status,idcategoria) =>{
        try {
            const sql = await connection.execute(
                'UPDATE categoria '
                +'SET nome = ?, status = ? '
                + 'WHERE idcategoria = ?;',
                [nome,status,idcategoria]
            );
        } catch (error) {
            throw error;
        }
    },

    deleteCategoria : async(idcategoria) =>{
        try {
            const sql = await connection.execute(
                'UPDATE categoria '
                + 'SET status = \'DESATIVADO\' '
                +'WHERE idcategoria = ?;',
                [idcategoria]
            );
            return sql;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = categoriaModel;
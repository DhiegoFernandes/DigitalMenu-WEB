const connection = require('../connection/connection');

const categoriaModel = {
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
    }
}
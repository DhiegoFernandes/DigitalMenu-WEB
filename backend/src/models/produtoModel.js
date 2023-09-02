const connection = require('../connection/connection');

const produtoModel = {
    criarProduto: async (nome, preco, descricao, categoria) => {
        try {
            const sql = 'INSERT INTO produto (nome, preco, descricao, id_categoria) '
            +'SELECT ?, ?, ?, c.idcategoria '
            +'FROM categoria c '
            +'WHERE c.nome = ?;'
            const a = await connection.execute(sql, [nome, preco, descricao, categoria]);
        } catch (error) {
            throw error;
        }
    },

    listarProduto : async() => {
        try {
            const [rows, fields] = await connection.execute( 
            'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
            + 'FROM produto p '
            + 'INNER JOIN categoria c '
            + 'ON p.id_categoria = c.idcategoria;'
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarProdutoAtivo : async() => {
        try {
            const [rows,fields] = await connection.execute(
                'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
                + 'FROM produto p '
                + 'INNER JOIN categoria c '
                + 'ON p.id_categoria = c.idcategoria '
                + 'WHERE p.status = \'ativado\';'
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarProdutoPorNome : async(nome) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
                + 'FROM produto p '
                + 'INNER JOIN categoria c '
                + 'ON p.id_categoria = c.idcategoria '
                + 'WHERE p.nome LIKE CONCAT(\'%\',?,\'%\');',
                [nome]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarPorStatus : async(status) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
                + 'FROM produto p '
                + 'INNER JOIN categoria c '
                + 'ON p.id_categoria = c.idcategoria '
                + 'WHERE p.status = ?;',
                [status]
            );
            return rows
        } catch (error) {
            throw error;
        }
    },

    listarProdutoPorFaixaDePreco : async(valorInicial, valorFinal) =>{
        try {
            const [rows, field] = await connection.execute(
                'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
                + 'FROM produto p '
                + 'INNER JOIN categoria c '
                + 'ON p.id_categoria = c.idcategoria '
                + 'WHERE p.preco BETWEEN ? AND ? '
                + 'ORDER BY p.preco;',
                [valorInicial,valorFinal]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarProdutoPorDescricao : async(descricao) => {
        try {
            const [rows, fields] = await connection.execute(
            'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
            + 'FROM produto p '
            + 'INNER JOIN categoria c '
            + 'ON p.id_categoria = c.idcategoria '
            + 'WHERE p.descricao LIKE CONCAT(\'%\', ?, \'%\');',
                [descricao]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarProdutoPorCategoria : async(categoria) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT p.idproduto, p.nome, c.nome, p.preco, p.descricao, p.status, p.id_categoria '
                + 'FROM produto p '
                + 'INNER JOIN categoria c '
                + 'ON p.id_categoria = c.idcategoria '
                + 'WHERE c. nome = ?;',
                [categoria]
            );
            return rows
        } catch (error) {
            throw error;
        }
    },

    alterarProdutoPeloNome : async(nomeNovo, preco, descricao, categoria, status, nome) => {
        try {
            const sql = 
            'UPDATE produto SET '
            + 'nome = ?, '
            + 'preco = ?, '
            + 'descricao = ?, '
            + 'id_categoria = (SELECT idcategoria FROM categoria WHERE nome = ?), '
            + 'status = ? '
            + 'WHERE nome = ?';
            await connection.execute(sql,[nomeNovo,preco,descricao,categoria,status,nome]);
        } catch (error) {
            throw error;
        }
    },

    deletarProduto : async(nome) => {
        try {
            const sql = 
            'UPDATE produto '
            + 'SET status = \'desativado\' '
            + 'WHERE nome = ?;'
            await connection.execute(sql,[nome]);
        } catch (error) {
            throw error;
        }
    }
};
    

module.exports = produtoModel;
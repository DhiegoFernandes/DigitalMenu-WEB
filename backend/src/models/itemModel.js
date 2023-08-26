const connection = require('../connection/connection');

const itemModel = {
    adicionaItem : async( id_pedido,id_produto,qtde, subtotal, observacao) =>{
        try {
            const sql = 'INSERT INTO item (id_pedido, id_produto, qtde, subtotal, observacao) VALUES (?, ?, ?,?,?)';
            await connection.execute(sql, [id_pedido, id_produto, qtde,subtotal,observacao]);
        } catch (error) {
            throw error;
        }
    },

    listarItemPorPedido: async (id_pedido) => {   
        try {
            const [rows,fields] = await connection.execute(
            'select item.iditem,item.id_produto,produto.nome,produto.preco,item.qtde,item.SUBTOTAL,item.HORAPEDIDO,item.status from item join produto on item.id_produto = produto.idproduto where item.ID_PEDIDO = ?;',
            [id_pedido]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },
    listarItensPorId : async (id_pedido) => {
        try {
            const [rows,fields] = await connection.execute(
            'SELECT id_pedido, id_produto, qtde, subtotal, horapedido, status FROM item WHERE id_pedido = ?;',
            [id_pedido]
            );
            return rows
        } catch (error) {
            throw error; 
        }
    },

    atualizarItem : async (iditem) => {
        try {
            const sql = 'UPDATE item SET status = \'CANCELADO\' WHERE IDITEM =?;';
            await connection.execute(sql, [iditem]);
        } catch (error) {
        throw error; 
        }
    },

    adicionarItemAdm : async (item) => {
        try {
            const sql = 
            'INSERT INTO item (id_pedido, id_produto, qtde, subtotal) VALUES (?, (SELECT idproduto FROM produto WHERE nome = ?), ?, (SELECT (preco * ?) FROM produto WHERE nome = ?))'
            const values = [item.id_pedido, item.nome_produto, item.qtde, item.preco_produto, item.nome_produto];

            const [rows, fields] = await connection.execute(sql, values);
            return rows; 
        }catch (error) {
        throw error; 
        } 
    },

    listarItensConfirmadoPorPedido : async (id_pedido) => {
        try {
            const [rows,fields] = await connection.execute(
                'SELECT i.iditem, p.idproduto, p.nome, p.preco, i.qtde, i.subtotal, i.horapedido AS horacomanda, i.status '
                + 'FROM item i '
                + 'INNER JOIN produto p '
                + 'ON p.idproduto = i.id_produto '
                + 'WHERE id_pedido = ? '
                + 'AND i.status = \'CONFIRMADO\';',
                [id_pedido]
            );
            return rows;
        } catch (error) {
        throw error;    
        }
    }
}

module.exports = itemModel;
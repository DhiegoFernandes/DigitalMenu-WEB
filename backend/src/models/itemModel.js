const connection = require('./connection');

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
    }
}

module.exports = itemModel;
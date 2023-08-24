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

//     listarItemPorPedido: async (id_pedido) => {
//         try {
//             const sql = 
    
//             const result = await connection.execute(sql, [id_pedido]);
//             return result;
//         } catch (error) {
//             throw error;
//         }
//     }
 }

module.exports = itemModel;
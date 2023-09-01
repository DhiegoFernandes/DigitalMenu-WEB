const connection = require('../connection/connection');

const pedidoModel = {
    adicionarPedido : async(idMesa) => {
        try{
        const sql = 
                'INSERT INTO pedido (idpedido, id_mesa, total, data, status) '
                + 'VALUES (DEFAULT, ?, DEFAULT, DEFAULT, DEFAULT);'
                await connection.execute(sql, [idMesa]);
        }catch(erro){
        throw erro;
        }
    },

    listarPedido : async() => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT idpedido, id_mesa, total, DATE_FORMAT(data, \'%d/%m/%Y\') AS data, '
                + 'DATE_FORMAT(data, \'%H:%i:%s\') AS horario, status '
                + 'FROM pedido;'
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarPedidoPorMesa : async(idMesa) => {
        try {
            const[rows, fields] = await connection.execute(
                'SELECT idpedido, id_mesa, total, DATE_FORMAT(data,\'%d/%m/%Y\') AS data, '
                + 'DATE_FORMAT(data,\'%H:%i:%s\') AS horario, status '
                + 'FROM pedido '
                + 'WHERE id_mesa = ?;',
                [idMesa]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarPedidoPorStatus : async(status) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT idpedido, id_mesa, total, DATE_FORMAT(data,\'%d/%m/%Y\') AS data, '
                + 'DATE_FORMAT(data,\'%H:%i:%s\') AS horario, status '
                + 'FROM pedido '
                + 'WHERE status = ?',
                [status]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarProdutoPorFaixaDePreco : async(valorInicial,  valorFinal) => {
        try{
            const [rows, fields] = await connection.execute(
                    'SELECT idpedido, id_mesa, total, DATE_FORMAT(data, \'%d/%m/%Y\') AS data, '
                    + 'DATE_FORMAT(data,\'%H:%i:%s\') AS horario, status '
                    + 'FROM pedido '
                    + 'WHERE total BETWEEN ? AND ? '
                    + 'ORDER BY total',
                    [valorInicial, valorFinal]
            );
            return rows;
        }catch(error){
            throw error;
        }
    },

    listarProdutoPorDia : async(data) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT idpedido, id_mesa, total, DATE_FORMAT(data, \'%d/%m/%Y\') AS data, '
                + 'DATE_FORMAT(data,\'%H:%i:%s\') AS horario, status '
                + 'FROM pedido '
                + 'WHERE DATE_FORMAT(data, \'%d/%m/%Y\') = ?;',
                [data]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarProdutoPorFaixaDia : async(dataInicial, dataFinal) => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT idpedido, id_mesa, total, DATE_FORMAT(data, \'%d/%m/%Y\') AS data, '
                + 'DATE_FORMAT(data,\'%H:%i:%s\') AS horario, status '
                + 'FROM pedido '
                + 'WHERE DATE_FORMAT(data, \'%d/%m/%Y\') >= ? AND DATE_FORMAT(data, \'%d/%m/%Y\') <= ?;',
                [dataInicial, dataFinal]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    listarVendasPorDia : async() => {
        try {
            const [rows, fields] = await connection.execute(
                'SELECT sum(total) AS total, DATE_FORMAT(data, \'%d/%m/%Y\') AS Data '
                +'FROM pedido '
                +'GROUP BY DATE_FORMAT(data, \'%d/%m/%Y\');',
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    atualizaPedido : async(idPedidoNovo, status, idPedio) => {
        try {
            const sql = await connection.execute(
                'UPDATE pedido p INNER JOIN item i '
                + 'ON p.idpedido = i.id_pedido '
                + 'SET p.total = (SELECT SUM(subtotal) '
                + 'FROM item WHERE id_pedido = ?), p.status = ? '
                + 'WHERE p.idpedido = ? AND i.status = \'confirmado\';',
                [idPedidoNovo, status, idPedio]
            );
        } catch (error) {
            throw error;
        }
    },

    atualizaPedidoItemAlterado : async(numeroPedido1, numeroPedido2) => {
        try {
            const sql = await connection.execute(
                'UPDATE pedido p INNER JOIN item i ON p.idpedido = i.id_pedido '
                + 'SET p.total = IFNULL((SELECT SUM(i.subtotal) '
                + 'FROM item i '
                + 'WHERE i.id_pedido = ? AND i.status = \'confirmado\'), 0.0) '
                + 'WHERE p.idpedido = ?;',
                [numeroPedido1, numeroPedido2]
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },

    atualizarPedidoVazio : async(idpedido) => {
        try {
            const sql = await connection.execute(
                'UPDATE pedido '
                +'SET status = \'encerrado\' '
                +'WHERE idpedido = ?;',
                [idpedido]
            );
        } catch (error) {
            throw error;
        }
    },

    cancelarPedido : async(status, numeroPedido) => {
        try {
            const sql = await connection.execute(
                'UPDATE pedido '
                +'SET status = ? '
                +'WHERE idpedido = ?;',
                [status, numeroPedido]
            );
        } catch (error) {
            throw error;
        }
    },

    deletarPedido : async(idPedido) => {
        try {
            const sql = await connection.execute(
                'DELETE FROM pedido '
                +'WHERE idpedido = ?;',
                [idPedido]
            );
        } catch (error) {
            throw error;
        }
    }
}

module.exports = pedidoModel;
const connection = require('../connection/connection');

const relatorioModel = {
    totalPedidos : async() => {
        try{
            const [rows, fields] = await connection.execute( 
                'SELECT COUNT(*) AS Total_Pedidos, SUM(total) AS Total_Vendido, AVG(total) AS Media_Pedido '
                + 'FROM pedido;'
            );
                return rows;
        }catch(erro){
        throw erro;
        }
    }
}

module.exports = relatorioModel;
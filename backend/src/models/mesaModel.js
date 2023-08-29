const connection = require('../connection/connection');

const mesaModel = {
    criarMesa : async(idMesa) =>{
        try{
            const sql = 'INSERT INTO mesa (idMesa,status) VALUES (?,default)'
            await connection.execute(sql,[idMesa]);
        }catch(err){
            throw err;    
        }
    },

    listarTodasMesas : async() =>{
        try{
            const [rows,fields] = await connection.execute(
                'SELECT idmesa, status FROM mesa;'
            );
            return rows;    
        }catch(err){
            throw err; 
        }
    },

    checkMesa : async (idMesa) => {
        try {
            const [rows,fields] = await connection.execute( 
                'SELECT idmesa, status FROM mesa WHERE idmesa = ? AND status = \'ATIVADO\';',
                [idMesa]    
            );
            if(rows.length > 0){
            return rows
            }else{ 
                return null;
            }    
        } catch (err) {
            throw err;
        }
    },

    listarTodasMesasPorStatus : async(status) =>{
        try{
            const [rows,fields] = await connection.execute(
                'SELECT idmesa, status FROM mesa WHERE status = ?;',
                [status]
            );
            if(rows.length > 0){
            return rows;
            }else return 'Status nao encontrado'; 
        }catch(err){
            throw err;
        }
    },
    
    listarMesaPorId : async(id) =>{
        try {
            const [rows,fields] = await connection.execute(
                'SELECT idmesa, status FROM mesa WHERE idmesa = ?;',
                [id]
            );
            if(rows.length > 0){
                return rows[0];
            }else return null;
        }catch (err) {
            throw err;
        }
    },
    
    atualizarMesa : async(idNovo,status,id) =>{
        try {
            const sql = 'UPDATE mesa SET idmesa = ?, status = ? WHERE idmesa = ?';
            await connection.execute(sql,[idNovo,status,id])
        }catch (err) {
            throw err;
        }
    },
    
    deletarMesa: async (id) => {
        try{
            const sql = 'UPDATE mesa SET status = \'DESATIVADO\' WHERE idmesa = ?;';
            await connection.execute(sql, [id]);
        }catch(err){
            throw err;
        }
    }
};

module.exports = mesaModel;
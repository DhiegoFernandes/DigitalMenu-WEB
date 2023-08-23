const connection = require('./connection');

const mesaModel = {
    criarMesa : async(idMesa) =>{
        try{
            const sql = 'INSERT INTO mesa (idMesa,status) VALUES (?,default)'
            await connection.execute(sql,[idMesa]);
        }catch(err){
            throw err;    
    }
}
};

module.exports = mesaModel;
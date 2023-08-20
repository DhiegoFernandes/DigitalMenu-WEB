const connection = require('./connection');

const pessoasModel = {
    getPessoas: async () => {
        try {
            const [rows, fields] = await connection.execute('SELECT * FROM pessoas');
            return rows; 
        } catch (err) {
            throw err;
        }
    },

    postPessoas: async (nome, sobrenome, idade) => {
        try{
            const sql = 'INSERT INTO pessoas (nome,sobrenome,idade) VALUES (?,?,?)';
            await connection.execute(sql,[nome, sobrenome, idade]);
        }catch(err){
            throw err;
        }
    },
        
    putPessoas: async (id, nome, sobrenome, idade) => {
        try{
            const sql = 'UPDATE pessoas SET nome = ?, sobrenome = ?, idade = ? WHERE id = ?';
            await connection.execute(sql,[nome,sobrenome,idade,id]);
        }catch(err){
            throw err;
        }
    },

    deletePessoas: async (id) =>{
        try{
            const sql = 'DELETE FROM pessoas WHERE id = ?';
            await connection.execute(sql,[id]);
        }catch(err){
            throw err;
        }
    }
};


module.exports = pessoasModel;
const pessoasModel = require('../models/pessoasModel');
const connection = require('../models/connection');


const pessoasController = {
    getPessoas: async (req, res) => {
        try {
            const pessoas = await pessoasModel.getPessoas();
            res.json(pessoas);
        } catch (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).json({ error: 'Erro ao buscar dados' });
        }
    },

    postPessoas: async (req, res) => {
        try{
            const {nome, sobrenome, idade} = req.body;
            await pessoasModel.postPessoas(nome, sobrenome, idade);
            res.status(201).json({ message: 'Pessoas inserida com sucesso'});
        }catch (err) {
            console.error('Erro ao inserir pessoa');
            res.status(500).json({error: 'Erro ao inserir pessoa'})
        }
    }
};

module.exports = pessoasController;

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
};

module.exports = pessoasController;

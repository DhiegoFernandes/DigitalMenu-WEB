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
            res.status(201).json({ message: 'Pessoas inserida com sucesso!'});
        }catch (err) {
            console.error('Erro ao inserir pessoa');
            res.status(500).json({error: 'Erro ao inserir pessoa'});
        }
    },

    putPessoas: async (req, res) => {
        try{
            const id = req.params.id;
            const{nome,sobrenome,idade} = req.body;
            await pessoasModel.putPessoas(id, nome, sobrenome, idade);
            res.status(200).json({message:'Alterado com sucesso!'});
        }catch(err){
            console.error('Erro a alterar dados');
            res.status(500).json({error:'Erro ao alterar dados'});
        }
    },

    deletePessoas : async (req, res) => {
        try{
            const id = req.params.id;
            await pessoasModel.deletePessoas(id);
            res.status(200).json({sucess: 'Usuário deletado com sucesso!'});
        }catch(err){
            console.error('Erro ao deletar');
            res.status(500).json({error:'Erro ao deletar usuário'});
        }
    }
};

module.exports = pessoasController;

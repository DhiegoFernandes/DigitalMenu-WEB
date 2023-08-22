const e = require('express');
const authModel = require('../models/authModel');
const connection = require('../models/connection');

exports.login = async( req, res) => {
    const { nome, senha} = req.body;

    try{
        // futuramente verificar autenticacao com a mesa escolhuda
        const user = await authModel.autenticar(nome, senha /*,mesa*/);

        if(user.length > 0){
            res.status(200).json({message : 'Login bem-sucedido'});
        }else{
        res.status(401).json({error : 'Credenciais invalidas'})
        }
    }catch(err){
        console.error('Erro ao autenticar',err);
        res.status(500).json({error : 'Erro ao autenticar usuario'});
    }
};

exports.register = async (req, res) => {
    const {nome, senha} = req.body;

    try{
        const existUser = await authModel.verificaExistencia(nome);

        if(existUser.length > 0){
            res.status(404).json({error : 'Usuario ja existe'});
        }else{
            await authModel.registrar(nome,senha);
            res.status(201).json({success : 'Registro bem-sucedido'});
        }
    }catch(err){
        console.log('Erro ao registrar',err);
        res.status(500).json({error : 'Erro ao registrar user'});
    }    
};

exports.delete = async(req,res)=>{
    const {nome} = req.params;
    const existUser = await authModel.verificaExistencia(nome);
    try{
        if(!existUser){
            res.status(500).json({error : 'Usuario nao existe'});     
        }else{
            await authModel.delete(nome);
            res.status(200).json({success : 'Usuário deletado com sucesso!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Erro ao deletar usuário'});
    }
};

exports.get = async(req,res)=>{
    const {nome} = req.params;

    try{
        const usuario = await authModel.buscarPorUsuario(nome);
        res.json(usuario);
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Usuario nao esta cadastrado"});
    }
};

exports.getAll = async(req,res)=>{

    try{
    const usuario = await authModel.listarTodosUsuarios()
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Erro ao listar todos os usuarios'})
    }    
};

exports.put = async (req, res) => {
    const { nome } = req.params;
    const { senha } = req.body; 
    
    try {
        const usuario = await authModel.buscarPorUsuario(nome);
        if (!usuario) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        await authModel.atualizarSenha(nome, senha);
        res.status(200).json({ success: "Senha atualizada com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao atualizar senha do usuário" });
    }
};
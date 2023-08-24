const express = require('express');
const UserModel = require('../models/userModel');
const connection = require('../models/connection');

exports.login = async( req, res) => {
    const { nome, senha} = req.body;

    try{

        const user = await UserModel.autenticar(nome, senha);

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
    const {nome, senha, tipoAcesso} = req.body;

    try{
        const existUser = await UserModel.verificaExistencia(nome);

        if(existUser.length > 0){
            res.status(404).json({error : 'Usuario ja existe'});
        }else{
            await UserModel.registrar(nome,senha, tipoAcesso);
            res.status(201).json({success : 'Registro bem-sucedido'});
        }
    }catch(err){
        console.log('Erro ao registrar',err);
        res.status(500).json({error : 'Erro ao registrar user'});
    }    
};

exports.getByName = async(req,res)=>{
    const {nome} = req.params;

    try{
        const usuario = await UserModel.buscarPorUsuario(nome);
        res.json(usuario);
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Usuario nao esta cadastrado'});
    }
};

exports.getAllUsersActives = async(req,res)=>{
    
    try{
        const usuarios = await UserModel.listarUsuarioAtivos();
        res.json(usuarios);
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Erro ao pesquisar usuarios ativos'});
    }
};

exports.getAll = async(req,res)=>{

    try{
        const usuario = await UserModel.listarTodosUsuarios();
        res.json(usuario);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Erro ao listar todos os usuarios'});
    }    
};

exports.getCategoriaPorNome = async(req,res)=>{
    const {nome} = req.params;
    try{
        const usuario = await UserModel.listarCategoriaPorNome(nome);
        res.json(usuario);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Erro ao buscar usuario'});
    }
};

exports.put = async (req, res) => {
    const { nome } = req.params;
    const { senha } = req.body; 
    
    try {
        const usuario = await UserModel.buscarPorUsuario(nome);
        if (!usuario) {
            res.status(404).json({ error: "Usuário não encontrado" });
            return;
        }

        await UserModel.atualizarSenha(nome, senha);
        res.status(204).json({ success: "Senha atualizada com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao atualizar senha do usuário" });
    }
};

exports.delete = async(req,res)=>{
    const {nome} = req.params;
    const existUser = await UserModel.verificaExistencia(nome);
    
    try{
        if(!existUser){
            res.status(500).json({error : 'Usuario nao existe'});     
        }else{
            await UserModel.delete(nome);
            res.status(200).json({success : 'Usuário deletado com sucesso!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Erro ao deletar usuário'});
    }
};
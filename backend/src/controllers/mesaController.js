const express = require('express');
const mesaModel = require('../models/mesaModel');
const connection = require('../models/connection');

exports.insertMesa = async(req,res) =>{
    const{idMesa} = req.body;

    try{
        const mesa = await mesaModel.criarMesa(idMesa);
        res.status(201).json(mesa);
    }catch(err){
        console.error(err);
        res.status(500).json(error);;
    }
};

exports.listarTodasMesas = async(req, res) =>{

    try{
        const mesas = await mesaModel.listarTodasMesas();
        res.json(mesas);
    }catch(err){
        console.error(err);
        res.status(500).json(error);;
    }
};

exports.checkMesas = async(req,res) =>{
    const{id} = req.params;

    try {
        const mesa = await mesaModel.checkMesa(id);
        res.status(200).json(mesa);
    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
};

exports.listarPorStatus = async(req, res) =>{
    const {status} = req.params;
    
    try {
        const mesas = await mesaModel.listarTodasMesasPorStatus(status);
        res.json(mesas);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);;
    }
};

exports.listarPorId = async(req, res) =>{
    const {id} = req.params;
    
    try {
        const mesaId = await mesaModel.listarMesaPorId(id);
        res.json(mesaId);
    } catch (error) {
        res.status(500).json(error);;
    }
};

exports.atualizarMesa = async(req, res) =>{
    const{id} = req.params;
    const{idNovo,status} = req.body;

    try {
        const buscarMesa = await mesaModel.listarMesaPorId(id);
        console.log('buscar'+buscarMesa)
        if(!buscarMesa){
            res.status(404).json({error:'Mesa nao encontrada'});
            return error
        }
        const mesa = await mesaModel.atualizarMesa(idNovo,status,id);
        console.log(mesa + "mesa")
        res.status(204).json(mesa);
    } catch (error) {
        res.status(500).json(error);   
    }
};

exports.desativarMesa =  async(req, res) =>{
    const{id} = req.params;

    try {
        const mesa = await mesaModel.listarMesaPorId(id);
        if(!mesa){
            res.status(404).json({error:'Mesa nao encontrada'}); 
            return
        }
        if(mesa.status === 'DESATIVADO'){
            res.status(400).json({error:'Essa mesa já está desativada'});
        }
        await mesaModel.deletarMesa(id);    
        res.status(200).json('Mesa desativada');
    } catch (error) {
        res.status(500).json(error);
    }
};

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
        res.status(500);
    }
};
const express = require('express');
const categoriaModel = require('../models/categoriaModel');
const connection = require('../connection/connection');

exports.criarCategoria = async(req,res) => {
    const nome = req.params;
    
    try {
        const criarCategoria = await categoriaModel.criarCategoria(nome);
        res.status(200).json(criarCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
};
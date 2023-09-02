const express = require('express');
const relatorioModel = require('../models/relatorioModel');
const connection = require('../connection/connection');


exports.totalPedidos = async(req,res) => {
    try {
        const relatorio = await relatorioModel.totalPedidos();
        res.status(200).json(relatorio);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};


const express = require('express');
const itemModel = require('../models/itemModel');
const connection = require('../models/connection');

exports.insertItem = async(req,res) =>{
    const{id_pedido, id_produto,qtde,subtotal,observacao} = req.body;

    try {
        const item = await itemModel.adicionaItem(id_pedido, id_produto,qtde,subtotal,observacao);
        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarItemPorPedido = async (req, res) => {
    const { id_pedido } = req.params;

    try {
        const items = await itemModel.listarItemPorPedido(id_pedido);
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};
const express = require('express');
const itemModel = require('../models/itemModel');
const connection = require('../connection/connections');

exports.insertItem = async(req,res) =>{
    const{id_pedido, id_produto,qtde,observacao} = req.body;

    try {
        const item = await itemModel.adicionaItem(id_pedido, id_produto,qtde,observacao);
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

exports.listarPorId = async (req, res) => {
    const {id_pedido} = req.params;

    try {
        const pedido = await itemModel.listarItensPorId(id_pedido);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.atualizarItemParaCancelado = async (req, res) => {
    const {iditem} = req.params;

    try {
        const item = await itemModel.atualizarItem(iditem);
        res.status(204).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.addItemAdmin = async (req, res) => {
    const item = req.body; 

    try {
        const result = await itemModel.adicionarItemAdm(item);
        res.status(200).json({ message: 'Item adicionado com sucesso!' });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar o item.' });
    }
};

exports.listarItensConfirmadosPorPedido = async (req, res) => {
    const id_pedido = req.params.id_pedido;

    try {
        const result = await itemModel.listarItensConfirmadoPorPedido(id_pedido);
        res.status(200).json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar.' });
    }
};
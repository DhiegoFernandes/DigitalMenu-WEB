const express = require('express');
const pedidoModel = require('../models/pedidoModel');
const connection = require('../connection/connections');

exports.adicionaPedido = async(req,res) => {
    const {idMesa} = req.body;

    try {
        const pedido = await pedidoModel.adicionarPedido(idMesa);
        res.status(201).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarPedido = async(req, res) => {
    try {
        const pedido = await pedidoModel.listarPedido();
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarPedidoPorMesa = async(req, res) => { 
    const{idMesa} = req.body;

    try {
        const pedido = await pedidoModel.listarPedidoPorMesa(idMesa);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarPedidoPorStatus = async(req, res) => {
    const{status} = req.body;

    try {
        const pedido = await pedidoModel.listarPedidoPorStatus(status);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarProdutoPorFaixaDePreco = async(req, res) => {
    const{valorInicial, valorFinal} = req.body;

    try {
        const pedido = await pedidoModel.listarProdutoPorFaixaDePreco(valorInicial, valorFinal);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarProdutoPorDia = async(req, res) => {
    const{data} = req.body;

    try {
        const pedido = await pedidoModel.listarProdutoPorDia(data);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarProdutoPorFaixaDia = async(req, res) => {
    const{dataInicial, dataFinal} = req.body;

    try {
        const pedido = await pedidoModel.listarProdutoPorFaixaDia(dataInicial, dataFinal);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarVendasPorDia = async(req, res) => {
    try {
        const pedido = await pedidoModel.listarVendasPorDia();
        res.status(200).json(pedido)
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.atualizaPedidoItemAlterado = async(req, res) => {
    const {numeroPedido1, numeroPedido2} = req.body;

    try {
        const pedido = await pedidoModel.atualizaPedidoItemAlterado(numeroPedido1, numeroPedido2);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.atualizarPedidoVazio = async(req, res) => {
    const {idpedido} = req.body;

    try {
            const verificaStatus = await pedidoModel.verificaStatus(idpedido);
        if(verificaStatus === true){
            res.status(200).json({message : 'Este pedido ja esta encerrado'});
        }else{
            const pedido = await pedidoModel.atualizarPedidoVazio(idpedido);
            res.status(200).json(pedido);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.cancelarPedido = async(req, res) => {
    const {status, numeroPedido} = req.body;

    try {
        const pedido = await pedidoModel.cancelarPedido(status, numeroPedido);
        res.status(200).json(pedido);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.deletarPedido = async(req, res) => {
    const {idPedido} = req.body;

    try {
        const pedido = await pedidoModel.deletarPedido(idPedido);
        res.status(200).json({sucess : 'Pedido deletado com sucesso'})
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};



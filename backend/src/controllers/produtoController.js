const express = require('express');
const produtoModel = require('../models/produtoModel');
const connection = require('../connection/connection');

exports.criarPoduto = async(req,res) => {
    const {nome, preco, descricao, categoria} = req.body;

    try {
        const produto = await produtoModel.criarProduto(nome,preco,descricao,categoria.nomeCategoria);
        res.status(201).json({success : 'Produto adicionado com sucesso'});
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarProduto = async(req, res) => {
    try {
        const produto = await produtoModel.listarProduto();
        res.status(200).json(produto); 
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarProdutoAtivo = async(req, res) => {
    try {
        const produtoAtivo = await produtoModel.listarProdutoAtivo();
        res.status(200).json(produtoAtivo);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarProdutoPorNome = async(req, res) => {
    const {nome} = req.body;

    try {
        const produto = await produtoModel.listarProdutoPorNome(nome);
        res.status(200).json(produto);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.alterarProdutoPeloNome = async(req, res) => {
    const{nomeNovo, preco, descricao, categoria, status, nome} = req.body;

    try {
        const produtoAlterado = await produtoModel.alterarProdutoPeloNome(nomeNovo, preco, descricao, categoria, status, nome);
        res.status(201).json({success : 'Produto alterado com sucesso!'});
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.deletarProduto = async(req, res) => {
    const{nome} = req.body;

    try {
        const produtoDeletado = await produtoModel.deletarProduto(nome);
        res.status(200).json({succes : 'Produto desativado com sucesso'});
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};
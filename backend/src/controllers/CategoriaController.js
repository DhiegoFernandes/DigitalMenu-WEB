const express = require('express');
const categoriaModel = require('../models/categoriaModel');
const connection = require('../connection/connection');

exports.listarCategoria = async(req, res) => {
    
    try {
        const listarCategoria = await categoriaModel.listarCategoria();
        res.status(200).json(listarCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarPorId = async(req,res) => {
    const idcategoria = req.params.idcategoria;

    try {
        const listarId = await categoriaModel.listarCategoriaPorId(idcategoria);
        res.status(200).json(listarId);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarPorNome = async(req,res) => {
    const nome = req.params.nome;

    try {
        const listarNome = await categoriaModel.listarPorNome(nome);
        res.status(200).json(listarNome);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarCategoriaAtivas = async(req, res) => {
    try {
        const listarCategoriaAtivas = await categoriaModel.listarCategoriaAtivas();
        res.status(200).json(listarCategoriaAtivas);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.listarCategoriaPorStatus = async(req, res) => {
    const status =  req.params.status;

    try {
        const listarCategoriaPorStatus = await categoriaModel.listarCategoriasPorstatus(status);
        res.status(200).json(listarCategoriaPorStatus);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.criarCategoria = async(req,res) => {
    const nome = req.body.nome;
    
    try {
        const criarCategoria = await categoriaModel.criarCategoria(nome);
        res.status(200).json(criarCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.updateCategoria = async(req,res) => {
    const nome = req.body.nome;
    const status = req.body.status;
    const idcategoria = req.body.idcategoria;

    try {
        const updtadecategoria = await categoriaModel.updateCategoria(nome, status, idcategoria);
        res.status(200).json(updtadecategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

exports.deleteCategoria = async(req, res) => {
    const idcategoria = req.params.idcategoria;

    try {
        const deleteCategoria = await categoriaModel.deleteCategoria(idcategoria);
        res.status(200).json();
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};
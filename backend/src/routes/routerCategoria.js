const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriaController');

router.post('/categoria/criar/:nome', categoriaController.criarCategoria);

module.exports = router;
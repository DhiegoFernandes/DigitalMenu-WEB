const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

router.get('/relatorio/total', relatorioController.totalPedidos);


module.exports = router;

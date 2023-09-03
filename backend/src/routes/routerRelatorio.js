const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

router.get('/relatorio/total', relatorioController.totalPedidos);
router.get('/relatorio/qtde/vendido', relatorioController.listarQtdeVendidaPorItem);
router.get('/relatorio/itens/mais/vendidos', relatorioController.listarItensMaisVendidos);
router.get('/relatorio/total/pedido/mes', relatorioController.totalPedidosPorMes);
router.get('/relatorio/itens/agrupados', relatorioController.listarItensPorPedidoAgrupado);
router.get('/relatorio/calcular/gorjeta', relatorioController.calcularGorjeta);

module.exports = router;

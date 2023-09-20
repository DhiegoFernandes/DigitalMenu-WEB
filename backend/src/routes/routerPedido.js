const express = require('express');
const router = express.Router();
const token = require('../middleware/jwtToken');
const pedidoController = require('../controllers/pedidoController');

router.get('/pedido', token, pedidoController.listarPedido);
router.get('/pedido/status', token, pedidoController.listarPedidoPorStatus);
router.get('/pedido/dia', token, pedidoController.listarProdutoPorDia);
router.get('/pedido/preco', token, pedidoController.listarProdutoPorFaixaDePreco);
router.get('/pedido/faixadia', token, pedidoController.listarProdutoPorFaixaDia);
router.get('/pedido/venda', token, pedidoController.listarVendasPorDia);
router.post('/pedido', token, pedidoController.adicionaPedido);
router.put('/pedido/item', token, pedidoController.atualizaPedidoItemAlterado);
router.put('/pedido/vazio', token, pedidoController.atualizarPedidoVazio);
router.delete('/pedido', token, pedidoController.deletarPedido);
router.post('/pedido/cancela', token, pedidoController.cancelarPedido);

module.exports = router;
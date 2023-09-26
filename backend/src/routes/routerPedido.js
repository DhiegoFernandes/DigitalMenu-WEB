const express = require('express');
const router = express.Router();
const token = require('../middleware/jwtToken');
const pedidoController = require('../controllers/pedidoController');

router.get('/pedidos', token, pedidoController.listarPedidos);
router.get('/pedidos/status', token, pedidoController.listarPedidosPorStatus);
router.get('/pedidos/dia', token, pedidoController.listarPedidosPorDia);
router.get('/pedidos/faixa-preco', token, pedidoController.listarPedidosPorFaixaDePreco);
router.get('/pedidos/faixa-dia', token, pedidoController.listarPedidosPorFaixaDia);
router.get('/pedidos/venda-por-dia', token, pedidoController.listarVendasPorDia);
router.post('/pedidos', token, pedidoController.adicionarPedido);
router.put('/pedidos/alterar-item', token, pedidoController.atualizarItemDoPedido);
router.put('/pedidos/atualizar-vazio', token, pedidoController.atualizarPedidoVazio);
router.delete('/pedidos', token, pedidoController.deletarPedidos);
router.post('/pedidos/cancelar', token, pedidoController.cancelarPedido);

module.exports = router;
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/pedido', pedidoController.listarPedido);
router.get('/pedido/status', pedidoController.listarPedidoPorStatus);
router.get('/pedido/dia', pedidoController.listarProdutoPorDia);
router.get('/pedido/preco', pedidoController.listarProdutoPorFaixaDePreco);
router.get('/pedido/faixadia', pedidoController.listarProdutoPorFaixaDia);
router.get('/pedido/venda', pedidoController.listarVendasPorDia);
router.post('/pedido', pedidoController.adicionaPedido);
router.put('/pedido/item', pedidoController.atualizaPedidoItemAlterado);
router.put('/pedido/vazio', pedidoController.atualizarPedidoVazio);
router.delete('/pedido', pedidoController.deletarPedido);
router.post('/pedido/cancela', pedidoController.cancelarPedido);

module.exports = router;
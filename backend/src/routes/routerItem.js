const express = require('express');
const router = express.Router();
const token = require('../middleware/jwtToken');
const itemController = require('../controllers/itemController');

router.get('/pedido/:id_pedido/items', token, itemController.listarItemPorPedido);
router.get('/pedido/list/:id_pedido/items', token, itemController.listarPorId);
router.get('/item/confirmado/:id_pedido', token, itemController.listarItensConfirmadosPorPedido);
router.put('/item/:iditem', token, itemController.atualizarItemParaCancelado);
router.post('/item/add/admin', token, itemController.addItemAdmin);
router.post('/item', token, itemController.insertItem);


module.exports = router;
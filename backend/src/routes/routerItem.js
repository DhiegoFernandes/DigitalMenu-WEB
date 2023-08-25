const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/pedido/:id_pedido/items', itemController.listarItemPorPedido);
router.get('/pedido/list/:id_pedido/items', itemController.listarPorId);
router.get('/item/confirmado/:id_pedido', itemController.listarItensConfirmadosPorPedido);
router.put('/item/:iditem', itemController.atualizarItemParaCancelado);
router.post('/item/add/admin', itemController.addItemAdmin);
router.post('/item', itemController.insertItem);


module.exports = router;
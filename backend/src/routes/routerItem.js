const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/item', (req, res) => {res.status(200).send('gga')});
router.get('/pedido/:id_pedido/items', itemController.listarItemPorPedido);
router.get('/pedido/list/:id_pedido/items', itemController.listarPorId);
router.put('/item/:iditem', itemController.atualizarItemParaCancelado);
router.post('/item', itemController.insertItem);


module.exports = router;
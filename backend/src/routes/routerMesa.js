const express = require('express');
const router = express.Router();
const mesaController = require('../controllers/mesaController');

router.get('/mesas', (req, res) => {res.status(200).send('gg')});
router.get('/mesa', mesaController.listarTodasMesas);
router.get('/mesa/:status', mesaController.listarPorStatus);
router.get('/mesa/dados/:id', mesaController.listarPorId);
router.get('/mesa/check/:id', mesaController.checkMesas);
router.post('/mesa', mesaController.insertMesa);
router.put('/mesa/:id', mesaController.atualizarMesa);
router.delete('/mesa/:id', mesaController.desativarMesa);

module.exports = router;
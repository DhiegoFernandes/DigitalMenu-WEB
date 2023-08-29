const express = require('express');
const router = express.Router();
const mesaController = require('../controllers/mesaController');

router.use('/mesa/check', mesaController.checkMesas);
router.get('/mesas', (req, res) => {res.status(200).send('gg')});
router.get('/mesa', mesaController.listarTodasMesas);
router.get('/mesa/:status', mesaController.listarPorStatus);
router.get('/mesa/dados/:id', mesaController.listarPorId);
router.post('/mesa', mesaController.insertMesa);
router.put('/mesa/:id', mesaController.atualizarMesa);
router.delete('/mesa/:id', mesaController.desativarMesa);

module.exports = router;
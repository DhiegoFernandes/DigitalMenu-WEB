const express = require('express');
const router = express.Router();
const token = require('../middleware/jwtToken');
const mesaController = require('../controllers/mesaController');

router.use('/mesa/check', mesaController.checkMesas);
router.get('/mesas', (req, res) => {res.status(200).send('gg')});
router.get('/mesa', token, mesaController.listarTodasMesas);
router.get('/mesa/:status', token, mesaController.listarPorStatus);
router.get('/mesa/dados/:id', token, mesaController.listarPorId);
router.post('/mesa', token, mesaController.insertMesa);
router.put('/mesa/:id', token, mesaController.atualizarMesa);
router.delete('/mesa/:id', token, mesaController.desativarMesa);

module.exports = router;
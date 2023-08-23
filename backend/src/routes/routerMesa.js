const express = require('express');
const router = express.Router();
const mesaController = require('../controllers/mesaController');

router.get('/mesas', (req, res) => {res.status(200).send('gg')});
router.post('/mesa', mesaController.insertMesa);

module.exports = router;
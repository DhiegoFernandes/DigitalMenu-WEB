const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', (req,res) => {res.status(200).send("Bem-vindo à minha API")});

// login e registros:
router.use('/login', authController.login);
router.post('/register', authController.register);
router.get('/user/:nome', authController.get);
router.get('/user',authController.getAll)
router.delete('/user/:nome',authController.delete);
router.put('/user/:nome', authController.put);
module.exports = router;

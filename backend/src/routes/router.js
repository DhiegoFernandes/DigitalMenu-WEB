const express = require('express');
const router = express.Router();
const pessoasController = require('../controllers/pessoasController');
const authController = require('../controllers/authController');

router.get('/pessoas', pessoasController.getPessoas);
router.post('/pessoas', pessoasController.postPessoas);
router.put('/pessoas/:id', pessoasController.putPessoas);
router.delete('/pessoas/:id', pessoasController.deletePessoas);
router.get('/', (req,res) => {res.status(200).send("Bem-vindo à minha API")});

// login e registros:
router.use('/login', authController.login);
router.post('/register', authController.register);
router.delete('/user/:nome',authController.delete);
router.get('/user/:nome', authController.get)
module.exports = router;

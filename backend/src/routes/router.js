const express = require('express');
const router = express.Router();
const pessoasController = require('../controllers/pessoasController');


router.get('/pessoas', pessoasController.getPessoas);



router.get('/', (req,res) => {res.status(200).send("Bem-vindo à minha API")});




module.exports = router;

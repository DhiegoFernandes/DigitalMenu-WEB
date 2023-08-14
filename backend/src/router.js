const express = require('express');
const router = express.Router();

const pessoasController = require('./controllers/pessoasController') 

router.get('/', (req,res) => {res.status(200).send("Bem-vindo à minha API")});
router.get('/pessoas', pessoasController.getAll);


module.exports = router;

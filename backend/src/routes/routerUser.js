const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', (req,res) => {res.status(200).send("Bem-vindo à minha API")});

// login e registros:
router.use('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/user/:nome', UserController.getByName);
router.get('/user',UserController.getAll);
router.get('/active', UserController.getAllUsersActives);
router.get('/user/catch/:nome', UserController.getCategoriaPorNome);
router.delete('/user/:nome',UserController.delete);
router.put('/user/:nome', UserController.put);
module.exports = router;

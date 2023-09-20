const express = require('express');
const router = express.Router();
const token = require('../middleware/jwtToken');
const categoriaController = require('../controllers/CategoriaController');

router.get('/categoria/listar', token, categoriaController.listarCategoria);
router.get('/categoria/listar/ativas', token, categoriaController.listarCategoriaAtivas);
router.get('/categoria/listar/status/:status', token, categoriaController.listarCategoriaPorStatus);
router.get('/categoria/listar/:idcategoria', token, categoriaController.listarPorId);
router.get('/categoria/listar/nome/:nome', token, categoriaController.listarPorNome);
router.post('/categoria/criar', token, categoriaController.criarCategoria);
router.put('/categoria/atualizar', token, categoriaController.updateCategoria);
router.delete('/categoria/deletar/:idcategoria', token, categoriaController.deleteCategoria);

module.exports = router;
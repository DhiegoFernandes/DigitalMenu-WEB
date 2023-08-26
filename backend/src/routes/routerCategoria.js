const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriaController');

router.get('/categoria/listar', categoriaController.listarCategoria);
router.get('/categoria/listar/ativas', categoriaController.listarCategoriaAtivas);
router.get('/categoria/listar/status/:status', categoriaController.listarCategoriaPorStatus);
router.get('/categoria/listar/:idcategoria', categoriaController.listarPorId);
router.get('/categoria/listar/nome/:nome', categoriaController.listarPorNome);
router.post('/categoria/criar', categoriaController.criarCategoria);
router.put('/categoria/atualizar', categoriaController.updateCategoria);
router.delete('/categoria/deletar/:idcategoria', categoriaController.deleteCategoria);

module.exports = router;
const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');


router.post('/produto', produtoController.criarPoduto );
router.get('/produto', produtoController.listarProduto);
router.get('/produto/nome', produtoController.listarProdutoPorNome);
router.get('/produto/ativo', produtoController.listarProdutoAtivo);
router.get('/produto/preco', produtoController.listarProdutoPorFaixaDePreco);
router.get('/produto/descricao', produtoController.listarProdutoPorDescricao);
router.get('/produto/categoria', produtoController.listarProdutoPorCategoria);
router.get('/produto/status', produtoController.listarProdutoPorStatus);
router.put('/produto', produtoController.alterarProdutoPeloNome);
router.delete('/produto', produtoController.deletarProduto);
module.exports = router;
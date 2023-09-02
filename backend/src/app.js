const express = require('express');
const cors = require('cors');
const routerUser = require('./routes/routerUser');
const routerMesa = require('./routes/routerMesa');
const routerItem = require('./routes/routerItem');
const routerCategoria = require('./routes/routerCategoria');
const routerProduto = require('./routes/routerProduto');
const routerPedido = require('./routes/routerPedido');
const routerRelatorio = require('./routes/routerRelatorio');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerUser,routerMesa,routerItem,routerCategoria, routerProduto, routerPedido, routerRelatorio);

module.exports = app;
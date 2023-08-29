const express = require('express');
const cors = require('cors');
const routerUser = require('./routes/routerUser');
const routerMesa = require('./routes/routerMesa');
const routerItem = require('./routes/routerItem');
const routerCategoria = require('./routes/routerCategoria');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routerUser,routerMesa,routerItem,routerCategoria);

module.exports = app;
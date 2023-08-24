const express = require('express');
const routerUser = require('./routes/routerUser');
const routerMesa = require('./routes/routerMesa');
const routerItem = require('./routes/routerItem');
const app = express();

app.use(express.json());
app.use(routerUser,routerMesa,routerItem);

module.exports = app;
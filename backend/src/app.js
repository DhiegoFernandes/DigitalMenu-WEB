const express = require('express');
const routerUser = require('./routes/routerUser');
const routerMesa = require('./routes/routerMesa');
const app = express();

app.use(express.json());
app.use(routerUser,routerMesa);

module.exports = app;
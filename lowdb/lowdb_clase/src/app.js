//inicializar el servidor
const express = require('express');
const morgan = require('morgan');

const app = express();

//middleware
app.use(morgan('dev')); //usar morgan solo para dev
app.use(express.json()); //express metodo json para hacer peticiones REST-API

//routes
app.use(require('./routes/products.routes'));

module.exports = app //exportamos app para usarlo en index.js







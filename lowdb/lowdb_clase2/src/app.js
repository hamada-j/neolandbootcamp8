//inicializar el servidor
const express = require('express');
const morgan = require('morgan');

const app = express();

//middleware
app.use(morgan('dev')); //usa morgan solo en dev
app.use(express.json()); //REST-API a traves de funcion json();


//rutas
app.use(require('./routes/products.router'));

module.exports = app; //exportamos app para usarlo donde hagafalta index.js
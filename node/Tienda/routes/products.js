let router = require('express').Router();

const Producto = require('../models/producto');

router.get('/', (req, res) => {
    Producto.find((err, productos) => {
        res.render('products/lista', { arrProductos: productos });
    });
});

router.get('/new', (req, res) => {
    res.render('products/formulario');
});

module.exports = router;
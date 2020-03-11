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

router.get('/:productoId', (req, res) => {
    console.log(req.params.productoId);
    Producto.findById(req.params.productoId, (err, producto) => {
        if (err) return res.send(err);
        res.render('products/detalle', { prod: producto })
    });
});

router.post('/create', (req, res) => {
    if (!req.body.activo) {
        req.body.activo = false;
    } else if (req.body.activo === 'on') {
        req.body.activo = true;
    }
    Producto.create(req.body)
        .then(producto => {
            res.redirect('/products');
        });
});

// /**
//  * 
//  * Este método suma dos números
//  * 
//  * @param {Number} a Número entero
//  * @param {String} b Otro número entero
//  */
// const suma = function (a, b) {

// }

module.exports = router;
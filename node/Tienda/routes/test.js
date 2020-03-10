let router = require('express').Router();
const Producto = require('../models/producto');

router.get('/insert', (req, res) => {
    let prod = new Producto();
    prod.nombre = 'Thermomix TM5';
    prod.departamento = 'electrodomesticos';
    prod.precio = 989;
    prod.activo = true;
    prod.save()
        .then(newProd => {
            res.json(newProd);
        });
});

router.get('/insertv2', (req, res) => {
    Producto.create({
        nombre: 'Macbook Pro 13',
        departamento: 'informatica',
        precio: 1299,
        activo: false
    }).then(newProd => {
        res.json(newProd);
    })
});

router.get('/insertv3', async (req, res) => {
    try {
        let newProd = await Producto.create({
            nombre: 'Picadora Moulinex',
            departamento: 'electrodomesticos',
            precio: 59,
            activo: true
        });
        res.json(newProd);
    } catch (err) {
        res.json(err);
    }
});

router.get('/find', (req, res) => {
    Producto.find((err, productos) => {
        if (err) return res.json(err);
        res.json(productos);
    });
});

module.exports = router;
let router = require('express').Router();
const Producto = require('../models/producto');
const Empleado = require('../models/empleado');

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

router.get('/findfiltrado', (req, res) => {
    Producto.find({
        precio: { $gt: 200, $lt: 1000 },
        departamento: { $in: ['electrodomesticos', 'informatica'] }
    }, (err, productos) => {
        if (err) return res.json(err);
        res.json(productos);
    });
});

router.get('/relaciones', (req, res) => {
    Producto.findById('5e677181118498117aa69fa2', (err, prod) => {
        let emp = new Empleado();
        emp.nombre_completo = 'Pedro Ruiz';
        emp.departamento = 'marketing';
        emp.producto = prod;
        emp.save().then(nuevoEmpleado => {
            res.json(nuevoEmpleado);
        })
    });
});

router.get('/relacionesv2', (req, res) => {
    Producto.activos((err, prods) => {
        let emp = new Empleado();
        emp.nombre_completo = 'Marisa García';
        emp.edad = 56;
        emp.activo = true;
        emp.productos = prods;
        emp.save().then(nuevoEmpleado => {
            res.json(nuevoEmpleado)
        }).catch(err => {
            res.json(err);
        });
    });
});

// TODO: Revisar Relaciones
router.get('/populate', (req, res) => {
    Empleado.findById('5e69fea7022b061078ad3b28')
        .populate('productos')
        .exec((err, emp) => {
            if (err) return res.json(err);
            console.log(emp.productos[0].nombre);
            res.json(emp);
        })
});

module.exports = router;
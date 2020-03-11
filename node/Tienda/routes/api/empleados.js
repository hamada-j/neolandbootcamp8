const router = require('express').Router();

const Empleado = require('../../models/empleado');

router.get('/', (req, res) => {
    Empleado.find((err, empleados) => {
        if (err) return res.json(err);
        res.json(empleados);
    });
});

router.post('/', (req, res) => {
    Empleado.create(req.body)
        .then(empleado => {
            res.json(empleado);
        }).catch(err => res.json(err));
});

module.exports = router;
const router = require('express').Router();

const Empleado = require('../../models/empleado');

router.get('/', (req, res) => {
    Empleado.find((err, empleados) => {
        if (err) return res.json(err);
        res.json(empleados);
    });
});

router.get('/nombres', async (req, res) => {
    Empleado.find((err, empleados) => {
        let arrNombres = empleados.map(empleado => empleado.nombre_completo);
        res.json(arrNombres);
    });
});

router.get('/mismodepartamento', (req, res) => {
    let emp = new Empleado();
    emp.departamento = 'marketing';
    emp.mismoDepartamento((err, empleados) => {
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
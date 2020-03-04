const router = require('express').Router();

const Alumno = require('../models/student');

// http://localhost:3000/students
router.get('/', async (req, res) => {
    const rows = await Alumno.getAll();
    res.render('students/index', { estudiantes: rows })
});

//GET localhost:3000/students/new
router.get('/new', (req, res) => {
    res.render('students/formNew');
});

router.get('/delete/:studentId', async (req, res) => {
    // Alumno.deleteById(req.params.studentId)
    //     .then(result => {
    //         res.redirect('/students');
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    await Alumno.deleteById(req.params.studentId)
    res.redirect('/students');
});

router.get('/:studentId', (req, res) => {
    Alumno.getById(req.params.studentId)
        .then(student => {
            res.render('students/detail', { alumno: student })
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    const result = await Alumno.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        email: req.body.email,
        matricula: req.body.numMatricula
    });
    console.log(result);
    res.redirect('/students');
});

module.exports = router;
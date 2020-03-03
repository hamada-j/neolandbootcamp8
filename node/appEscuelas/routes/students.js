const router = require('express').Router();

const Alumno = require('../models/alumno');

// http://localhost:3000/students
router.get('/', async (req, res) => {
    const rows = await Alumno.getAll();
    res.render('students/index', { estudiantes: rows })
});

//GET localhost:3000/students/new
router.get('/new', (req, res) => {
    res.render('students/formNew');
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/students');
});

module.exports = router;
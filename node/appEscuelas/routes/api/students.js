const router = require('express').Router();

const Student = require('../../models/student');
const middlewares = require('../middlewares');

router.use(middlewares.checkToken);
router.use(middlewares.registerAction);

// GET http://localhost:3000/api/students
router.get('/', async (req, res) => {
    const rows = await Student.getAll();
    res.json(rows);
});

// GET http://localhost:3000/api/students/8
router.get('/:studentId', async (req, res) => {
    const student = await Student.getById(req.params.studentId);
    res.json(student);
});

// POST http://localhost:3000/api/students
router.post('/', async (req, res) => {
    const result = await Student.create(req.body);
    if (result['affectedRows'] === 1) {
        const student = await Student.getById(result['insertId']);
        res.json(student);
    } else {
        res.json({ error: "El alumno no se ha insertado" });
    }
});

router.delete('/', async (req, res) => {
    const result = await Student.deleteById(req.body.studentId);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Se ha borrado el alumno 😎' });
    } else {
        res.json({ error: 'No se ha borrado el alumno 🛑' })
    }
});

module.exports = router;
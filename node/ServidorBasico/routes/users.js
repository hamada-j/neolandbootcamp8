var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('MIDDLEWARE PARA USERS');
  next();
});



/* GET users listing. */
// GET http://localhost:3000/users
router.get('/', function (req, res, next) {
  console.log()
  res.send('respond with a resource');
});

// http://localhost:3000/users/new?param1=valor&param2=valor
// http://localhost:3000/users/new
router.get('/new', (req, res) => {
  console.log(req.query);
  res.send('Get para crear usuario');
});

router.get('/:usuarioId', (req, res) => {
  console.log(req.params);
  res.send('Ruta para el ID');
});

// POST http://localhost:3000/users/new
router.post('/new', (req, res) => {
  console.log(req.body);
  res.send('Ruta para new POST');
});

module.exports = router;



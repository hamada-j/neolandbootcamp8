var express = require('express');
var router = express.Router();

/* GET home page. */
//GET http://localhost:3000
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Full Stack es chachi',
    nombre: 'Mario',
    numeros: ["uno", "dos", "tres", "cuatro"],
    estilos: { color: "white", 'background-color': "blue" },
    urlImagen: 'https://hackernoon.com/hn-images/1*Y0UYuGcFGSCfs5Eexafq6A.png',
    randomNum: Math.floor(Math.random() * 3)
  });
});

module.exports = router;

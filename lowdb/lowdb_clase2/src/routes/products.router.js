const { Router } = require("express");

const router = Router();

const { crearProducto, borrarProducto, obtenerProductos, obtenerProductoById, actualizarProducto } = require('../controllers/products.controller');

router.get('/products', obtenerProductos);
router.get('/products/:id', obtenerProductoById);
router.post('/products', crearProducto);
router.delete('/products/:id', borrarProducto);
router.put('/products/:id', actualizarProducto);

module.exports = router;

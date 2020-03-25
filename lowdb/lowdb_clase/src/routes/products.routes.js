const { Router } = require('express');
const router = Router();

const { obtenerProductos, crearProductos, borrarProductos, obtenerProductoById, actualizarProducto } = require('../controllers/products.controller');

router.get('/products', obtenerProductos);
router.get('/products/:id', obtenerProductoById);
router.post('/products', crearProductos);
router.put('/products/:id', actualizarProducto);
router.delete('/products/:id', borrarProductos);


module.exports = router;
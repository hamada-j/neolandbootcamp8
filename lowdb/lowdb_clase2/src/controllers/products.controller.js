const { obtenerConexion } = require('../db');
const { v4 } = require('uuid');


//crearProducto http://localhost:3000/products
const crearProducto = (req, res) => {
    const nuevoProducto = {
        id: v4(),
        nombre: req.body.nombre,
        precio: req.body.precio,
    }

    obtenerConexion().get('products').push(nuevoProducto).write();
    res.json(nuevoProducto);
}
//borrarProducto http://localhost:3000/products/:id
const borrarProducto = (req, res) => {
    const idBorrado = req.params.id
    const productoBorrado = obtenerConexion().get('products').remove({ id: idBorrado }).write();
    res.status(200).json({ message: "Producto Borrado" });
}

//obtenerProductos http://localhost:3000/products
const obtenerProductos = (req, res) => {
    const productos = obtenerConexion().get('products').value();
    res.json(productos);
}

const obtenerProductoById = (req, res) => {
    const idBuscar = req.params.id;
    const producto = obtenerConexion().get('products').find({ id: idBuscar }).value();
    res.json(producto);
}

const actualizarProducto = async (req, res) => {
    const idActualizar = req.params.id;
    const productoActualizar = await obtenerConexion().get('products').find({ id: idActualizar }).assign(req.body).write();
    res.json(productoActualizar);
}



module.exports = {
    crearProducto,
    borrarProducto,
    obtenerProductos,
    obtenerProductoById,
    actualizarProducto
}
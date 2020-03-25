const { obtenerConexion } = require('../db');
const { v4 } = require('uuid');

//obtenerProductos http://localhost:3000/products
const obtenerProductos = (req, res) => {
    const productos = obtenerConexion().get('products').value();
    res.send(productos);
}

//crearProductos http://localhost:3000/products
const crearProductos = (req, res) => {
    const nuevoProducto = {
        id: v4(),
        nombre: req.body.nombre,
        precio: req.body.precio
    }

    //guardar el producto en db.sjon
    obtenerConexion().get('products').push(nuevoProducto).write();

    res.json(nuevoProducto);

}

//borrarProductos http://localhost:3000/products/id
const borrarProductos = (req, res) => {
    let idBorrar = req.params.id;

    const productoBorrado = obtenerConexion().get('products').remove({ id: idBorrar }).write();

    res.json(productoBorrado);

}

//obtenerProductoById http://localhost:3000/products/id
const obtenerProductoById = (req, res) => {
    let idProducto = req.params.id;
    const producto = obtenerConexion().get('products').find({ id: idProducto }).value();
    res.json(producto);
}

//actualizarProducto http://localhost:3000/products/id
const actualizarProducto = async (req, res) => {
    let idBuscar = req.params.id;
    const productoActualizado = await obtenerConexion().get('products').find({ id: idBuscar }).assign(req.body).write();

    res.json(productoActualizado);
}

module.exports = {
    obtenerProductos,
    crearProductos,
    borrarProductos,
    obtenerProductoById,
    actualizarProducto
}
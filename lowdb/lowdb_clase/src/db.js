//montar BBDD fisica a traves de lowdb
const lowdb = require('lowdb');
const File = require('lowdb/adapters/FileAsync');

let db;

async function crearConexion() {
    //crear el archivo
    const adaptador = new File('db.json');
    //se ha lowdb para cargarlo en la variable global y poder usarlo en otdas partes
    db = await lowdb(adaptador);
    //inicializo: array dentro del fichero, para escribirlo dentro del fichero voy a usar el metodo write de lowdb

    // db.defaults({products: [], users: []  })

    db.defaults({ products: [] }).write();
}

//exportar db a traves del uso de una funcion que me dara acceso a la conexion
const obtenerConexion = () => db;

module.exports = {
    crearConexion,
    obtenerConexion
}



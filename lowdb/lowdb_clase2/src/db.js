const lowdb = require('lowdb');
const File = require('lowdb/adapters/FileAsync');
//para crear archivo de forma asincrona y usarlo en el servidor.

let db;


async function crearConexion() {
    //creacion del archivo 
    const adaptador = new File('db.json');

    db = await lowdb(adaptador);
    // puedo crear un archivo con diferentes tipos de datos todos ellos separados por objetos db.defaults({ products: [], user: [], service: []  }).write();
    db.defaults({ products: [] }).write();
}

const obtenerConexion = () => db;

module.exports = {
    crearConexion,
    obtenerConexion
}
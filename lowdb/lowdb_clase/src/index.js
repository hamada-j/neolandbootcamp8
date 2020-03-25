//cargar el servidor
const app = require('./app.js');

//carga la bbdd
const { crearConexion } = require('./db.js');

//crear conexion.
crearConexion();

//inilicializar el servidor
app.listen(3000);
console.log('Servidor en puerto', 3000);

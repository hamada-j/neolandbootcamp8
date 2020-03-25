//cargar servidor
const app = require('./app');

//cargo la bbdd
const { crearConexion } = require('./db');
crearConexion();

//inicializar el servidor
app.listen(3000);
console.log('servidor en puerto', 3000);
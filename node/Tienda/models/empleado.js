const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
    nombre: String,
    apellidos: String,
    identificador: String,
    departamento: String,
    edad: Number,
    activo: Boolean
});

module.exports = mongoose.model('empleado', empleadoSchema);
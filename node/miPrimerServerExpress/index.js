const express = require('express');
const app = express();

// GET http://localhost:3000
app.get('/', (req, res) => {
    res.send('Petición GET sobre http://localhost:3000');
});

// GET http://localhost:3000/json
app.get('/json', (req, res) => {
    const personas = [
        { nombre: 'Pedro', apellidos: 'Ruiz' },
        { nombre: 'Ramiro', apellidos: 'García' },
        { nombre: 'Rosa', apellidos: 'Diez' }
    ];
    res.json(personas);
});

// POST http://localhost:3000/peticion/post
app.post('/peticion/post', (req, res) => {
    res.send('Respuesta de la petición POST');
});

// PATCH http://localhost:3000/about/editar
app.patch('/about/editar', (req, res) => {
    res.send('Respuesta al PATCH, mu bonico!')
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

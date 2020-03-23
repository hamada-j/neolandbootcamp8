const vorpal = require('vorpal')();
const clear = require('clear');
const chalk = vorpal.chalk;

const camaras = require('./camaras');

vorpal
    .delimiter('$ >')
    .show();

vorpal
    .command('test', 'Comando para probar si todo funsiona')
    .action((args, callback) => {
        clear();
        console.log(chalk.blue('Este es el comando de prueba'));
        callback();
    });

vorpal
    .command('camara', 'Recupera aleatoriamente una de las cámaras de la ciudad de Madrid')
    .action((args, callback) => {
        clear();
        camaras()
            .then(() => {
                callback();
            });
    });

vorpal
    .command('preguntas', 'Pequeño test para hacer preguntas')
    .action(function (args, callback) {
        clear();
        this.prompt([
            {
                type: 'input',
                message: 'Introduce tu nombre',
                name: 'nombre',
                default: 'Mario Girón'
            },
            {
                type: 'confirm',
                message: '¿Estás respetando la cuarentena?',
                name: 'cuarentena'
            },
            {
                type: 'list',
                message: '¿Cuándo crees que terminará la cuarentena?',
                name: 'duracion',
                choices: ['1 semana', '2 semanas', '1 mes', 'Me quedo sin vida']
            },
            {
                type: 'password',
                message: 'Dame tu contraseña bitch',
                name: 'clave'
            },
            {
                type: 'list',
                message: '¿Qué tiempo hace en tu ciudad?',
                name: 'tiempo',
                choices: [
                    { name: 'Hace mucho sol', value: 'sol' },
                    { name: 'Temperatura normal', value: 'normal' },
                    { name: 'Hace fresquete', value: 'regular' },
                    { name: 'Catástrofe por temporal', value: 'frio' }
                ]
            }
        ], function (results) {
            console.log(results);
            callback();
        });
    });
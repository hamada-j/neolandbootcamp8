const vorpal = require('vorpal')();
const chalk = vorpal.chalk;
const clear = require('clear');

const camaras = require('./camaras');

vorpal.delimiter('$ >').show();

vorpal.command('test', 'Este comando es para hacer pruebas')
    .action((args, callback) => {
        console.log(chalk.blue('Esto es una prueba'));
        callback();
    });

vorpal.command('camara', 'Recupera aleatoriamente una de las cámaras de la ciudad de Madrid')
    .action((args, callback) => {
        clear();
        camaras().then(() => {
            callback();
        });
    });

vorpal.command('preguntas', 'Pequeño cuestionario con preguntas')
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
                message: '¿Estás siguiendo la cuarentena?',
                name: 'cuarentena'
            },
            {
                type: 'list',
                message: '¿Cuánto crees que va a durar la cuarentena?',
                name: 'duracion',
                choices: ['1 semana', '2 semanas', '1 mes', 'corre plátano']
            },
            {
                type: 'password',
                message: 'Dame tu clave del banco',
                name: 'clave'
            },
            {
                type: 'list',
                message: 'Elige el país que va a caer antes',
                name: 'pais',
                choices: [
                    { name: 'España 🇪🇸', value: 'es' },
                    { name: 'Italia 🇮🇹', value: 'it' },
                    { name: 'Francia 🇫🇷', value: 'fr' },
                    { name: 'Alemania 🇩🇪', value: 'ge' }
                ]
            }
        ], function (respuestas) {
            console.log(respuestas);
            callback();
        });
    });
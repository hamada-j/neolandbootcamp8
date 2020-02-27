const chalk = require('chalk');
const axios = require('axios');
const tokengn = require('tokengn')

console.log(chalk.bgBlue.yellow('Hola hamijos, bienvenidos a Node!'));

// axios.get('https://swapi.co/api/planets/?format=json')
//     .then(response => {
//         console.log(response.data.count);
//     });

console.log(process.argv);
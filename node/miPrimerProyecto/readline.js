const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface(process.stdin, process.stdout);
const persona = {
    name: '',
    palabras: []
};

rl.question("¿Cuál es el nombre de una persona real? ", function (answer) {
    try {
        fs.appendFileSync(`./ficheros/${answer}.md`, `Fichero de ${answer}`);
    } catch (err) {
        console.log(err);
    }


    rl.setPrompt(`¿Qué dice ${persona.name}? `);
    rl.prompt();
    rl.on('line', function (saying) {
        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            fs.appendFile(`./ficheros/${answer}.md`, 'UTF-8', (err) => {
                if (err) console.log(err);
            })
            persona.palabras.push(saying.trim());
            rl.setPrompt(`¿Qué más dice ${persona.name}? ('exit' para salir) `);
            rl.prompt();
        }
    });
});

rl.on('close', function () {
    console.log("%j", persona.palabras); // [Object object]
    // console.log("%s es una persona real que dice %j", persona.name, persona.palabras);
    process.exit();
});
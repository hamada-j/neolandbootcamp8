const fs = require('fs');

console.log('inicio'); // 1

const data = fs.readFileSync('fichero.md');
console.log(data.toString()); // 2

console.log('final'); // 3 

fs.readdir('.', (err, files) => {
    if (err) console.error(err);
    console.log(files);
});
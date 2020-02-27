const fs = require('fs');

fs.readdir('./ficheros', (err, files) => {
    if (err) console.error(err);
    for (const file of files) {
        if (file.endsWith('.md')) {
            fs.readFile(`./ficheros/${file}`, 'UTF-8', (err, data) => {
                console.log(data.toString());
            })
        }
    }
});


fs.readdir('./ficheros', (err, files) => {
    if (err) console.log(err);
    files.filter(file => file.endsWith('.md')).forEach(item => fs.readFile(`./ficheros/${item}`, 'UTF-8', (err, data) => console.log(data.toString())));
});
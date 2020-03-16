const fs = require('fs');

console.log(process.argv);

fs.readdir(process.argv[2], (err, files) => {
    console.log(files);
});
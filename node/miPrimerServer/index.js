const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.statusCode);
    res.end('Hola Server!');
});

server.listen(3000);
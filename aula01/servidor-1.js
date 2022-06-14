const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'});

    res.end('<h1>Isso é um servidor HTTP da aula01!</h1>');
}).listen(3030, () => {
    console.log('Running server!');
})

 


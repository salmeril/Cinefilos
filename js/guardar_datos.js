const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
    if (req.method === 'POST' && req.url === '/guardar_datos') {
        let body = '';

        req.on('data', function(data) {
            body += data;
        });

        req.on('end', function() {
            const jsonData = JSON.parse(body);
            const fileName = 'datos.json';

            fs.appendFile(fileName, JSON.stringify(jsonData) + '\n', function(err) {
                if (err) throw err;
                console.log('Datos guardados en ' + fileName);
            });

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Datos guardados correctamente.');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página no encontrada.');
    }
}).listen(8080);

console.log('Servidor en ejecución en http://localhost:5501/');

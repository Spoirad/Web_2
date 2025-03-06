const http = require('node:http');
const cursos = require('./cursos.json');
const fs = require('node:fs');

const processRequest = (req, res) => {
    console.log('Request received: ', req.url);
    if (req.method === 'GET') {
        processGetRequest(req, res);
    } else if (req.method === 'POST') {
        processPostRequest(req,res);
    }
}

const processGetRequest = (req, res) => {
    let body = null;
    switch (req.url) {
        case '/':
            body = cursos;
            break;
        case '/matematicas':
            body = cursos.matematicas;
            break;
        case '/programacion':
            body = cursos.programacion;
            break;
    }
    if (body) {
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(body));
    } else {
        res.statusCode = 404; 
        res.end('No encontrado');
    }
}

const processPostRequest = (req, res) => {

    let body = '';
    req.on('data', (chunk) => body += chunk.toString());
    req.on('end', () => {
        
        if (req.url === '/programacion') {
            
            cursos.programacion.push(JSON.parse(body));

            //en este caso tambiÃ©n serÃ­a vÃ¡lido:
            //cursos.programacion = [...cursos.programacion, JSON.parse(body)];

            fs.writeFileSync('./cursos.json', JSON.stringify(cursos, null, 4));
            console.log(cursos);
            res.statusCode= 201;
            res.end('Curso aÃ±adido');
        } else {
            res.statusCode = 405; //solo permite POST en la ruta /programacion
            res.end('OpciÃ³n no permitida');
        }
    })
}

const server = http.createServer((req, res) => {
    processRequest(req, res);
});
server.listen(3000, () => {

    console.log(`Server is running on port ${server.address().port}`);
})

server.on('error', (err) => {
    if (err.name === 'EADDRINUSE') {
        console.log('Puerto en uso...');
        server.listen(0, () => {
            console.log('Listening on port:', server.address().port);
        })
    }
});
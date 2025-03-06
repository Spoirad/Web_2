const express = require('express');
const app = express();

const {routerProgramacion} = require('./routers/programacion');
const {routerMatematicas} = require('./routers/matematicas');


//Simulamos una base de datos con el archivo de cursos.js anterior
const infoCursos = require('./data/cursos.json');
// Loading process.env
require('dotenv').config();  // el require te devulve el dotenv 
// Routing
app.get('/', (req, res) => {
    res.send('Hello World')
})
// Listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto', port);
});

app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);


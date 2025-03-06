const express = require('express');
const routerMatematicas = express.Router();
const app = express();

app.use('/api/cursos/programacion' , routerMatematicas );

const infoCursos = require('../data/cursos.json');
routerMatematicas .get('/', (req, res) =>{

    if(req.query.ordenar === 'vistas'){
        res.send (infoCursos.matematicas.sort((a,b) => b.vistas - a.vistas));
    }else{
        res.send(infoCursos.matematicas);
    }
});

routerMatematicas .get('/:tema' , (req, res) => {
    const tema = req.params.tema;
    const data = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if(data.length === 0) {
        return res.status(404).send("No se encontró " + tema);
    }
    res.send(JSON.stringify(data));
});

routerMatematicas .get('/:tema/:nivel' , (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const data = infoCursos.matematicas.filter((curso => curso.tema === tema) && (curso => curso.nivel === nivel));

    if(data.length === 0) {
        return res.status(404).send("No se encontró " + tema + nivel);
    }
    res.send(JSON.stringify(data));
});

//Middleware
routerMatematicas.use(express.json());
routerMatematicas.post('/', (req, res) => {
const cursoNuevo = req.body;
//Aquí irían algunas comprobaciones de formato
infoCursos.matematicas.push(cursoNuevo);
res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas .put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;
    const indice = infoCursos.matematicas.findIndex(curso => curso.id == id);
    // Si no lo encuentra, devuelve -1
    if (indice >= 0) {
        infoCursos.matematicas[indice] = cursoActualizado ;
    }
    res.send(JSON.stringify(infoCursos.matematicas));
    });


routerMatematicas .delete('/:id', (req, res) => {
        const id = req.params.id;
        const indice = infoCursos.matematicas.findIndex(curso => curso.id == id);
        if (indice >= 0) {
        //Elementos a eliminar desde el índice
        infoCursos.matematicas.splice(indice, 1);
        }
        res.send(JSON.stringify(infoCursos.matematicas));
    });

module.exports = { routerMatematicas };


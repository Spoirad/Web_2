const express = require('express');
const routerProgramacion = express.Router();
const app = express();

app.use('/api/cursos/programacion' , routerProgramacion );

const infoCursos = require('../data/cursos.json');
routerProgramacion .get('/', (req, res) =>{

    if(req.query.ordenar === 'vistas'){
        res.send (infoCursos.programacion.sort((a,b) => b.vistas - a.vistas));
    }else{
        res.send(infoCursos.programacion);
    }
});

routerProgramacion .get('/:lenguaje' , (req, res) => {
    const lenguaje = req.params.lenguaje;
    const data = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(data.length === 0) {
        return res.status(404).send("No se encontró " + lenguaje);
    }
    res.send(JSON.stringify(data));
});

routerProgramacion .get('/:lenguaje/:nivel' , (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const data = infoCursos.programacion.filter((curso => curso.lenguaje === lenguaje) && (curso => curso.nivel === nivel));

    if(data.length === 0) {
        return res.status(404).send("No se encontró " + lenguaje + nivel);
    }
    res.send(JSON.stringify(data));
});

//Middleware
routerProgramacion.use(express.json());
routerProgramacion.post('/', (req, res) => {
const cursoNuevo = req.body;
//Aquí irían algunas comprobaciones de formato
infoCursos.programacion.push(cursoNuevo);
res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion .put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;
    const indice = infoCursos.programacion.findIndex(curso => curso.id == id);
    // Si no lo encuentra, devuelve -1
    if (indice >= 0) {
        infoCursos.programacion[indice] = cursoActualizado ;
    }
    
    res.status(201).json(JSON.stringify(infoCursos.programacion));
    });


routerProgramacion .delete('/:id', (req, res) => {
        const id = req.params.id;
        const indice = infoCursos.programacion.findIndex(curso => curso.id == id);
        if (indice >= 0) {
        //Elementos a eliminar desde el índice
        infoCursos.programacion.splice(indice, 1);
        }
        res.send(JSON.stringify(infoCursos.programacion));
    });

module.exports = { routerProgramacion }


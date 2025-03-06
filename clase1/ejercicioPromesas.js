//importas node.js
const fs = require("node:fs");




const miPromesa = new Promise ((resolve, reject)=> {
    setTimeout(() => {
        reject("COSA"); //reject para que salga rechazada y resolve para que salga cumplida
    }, 3000);
    
});
console.log(miPromesa);
setTimeout(() => {
    console.log("Promesa resuelta");
},4000);
const manejarPromesaCumplida = (valor) => {
    console.log("Cumplida");
};

const manejarPromesaRechazada = (razonRechazada) => {
    console.log("Rechazada");
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);



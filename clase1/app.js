//importas node.js
const fs = require("node:fs");

//metes en una variable la lectura del texto en utf-8
const texto = fs.readFileSync("index.html", "utf8");
//lo imprimimos
console.log(texto);

//renombrar archivo , es necesario el sync
fs.renameSync("index.html","index2.html");


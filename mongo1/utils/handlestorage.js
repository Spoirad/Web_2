const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, callback) { //Pasan argumentos automáticamente
        const pathStorage = __dirname + "/../storage"
        callback(null, pathStorage) //error y destination
    },
    filename: function (req, file, callback) { 
        const ext = file.originalname.split(".").pop(); // Obtener la extensión
        const name = file.originalname.split(".")[0]; // Obtener el nombre original sin extensión
        const filename =  name + "-" + Date.now() + "." + ext; // Construir el nuevo nombre
        callback(null, filename);
    }
})
const uploadMiddleware = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }) //Middleware entre la ruta y el controlador
const memory = multer.memoryStorage();

const uploadMiddlewareMemory = multer({ storage: memory, limits: { fileSize: 5 * 1024 * 1024}}) //Middleware para subir imágenes en memoria


module.exports = { uploadMiddleware, uploadMiddlewareMemory } 
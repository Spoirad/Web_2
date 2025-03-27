const mongoose = require('mongoose')
const dbConnect = async () => {
    const db_uri = process.env.DB_URI
    mongoose.set('strictQuery', false)
    try {
        await mongoose.connect(db_uri)
    } catch (error) {
        console.error("Error conectando a la BD:", error)
    }
    //Listen events
    mongoose.connection.on("connected", () => console.log("Conectado a la BD"))
    mongoose.connection.on("erorr", () => console.log(error))
}


const db_uri = process.env.NODE_ENV === 'test' ? process.env.DB_URI_TEST:
    process.env.DB_URI

    const dbconnect = () => {
        mongoose.set('strictQuery', false)
        mongoose.connect(db_uri)
    }

module.exports = dbConnect
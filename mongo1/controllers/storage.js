const { uploadToPinata } = require("../utils/handleUploadIPFS.js")
const storageModel = require("../models/nosql/storage.js")

const createItem = async (req, res) => {
    const { body, file } = req
    const fileData = {
        filename: file.filename,
        url: process.env.PUBLIC_URL + "/" + file.filename
    }
    const data = await storageModel.create(fileData)
    res.send(data)
}

const uploadImage = async (req, res) => {
    try {
        const id = req.params.id
        const fileBuffer = req.file.buffer
        const fileNanme = req.file.originalname
        const pinataResponse = await uploadToPinata(fileBuffer, fileNanme);

        const ipfsFile = pinataResponse.IpfsHash
        const ipfs = `https://${process.env.PINATA_GATEWAY_URL}/ipfs/${ipfsFile}`
        const data = await storageModel.create()
        res.send(data)
    }
    catch (err) {
        console.error(err)
        res.status(500).send('ERROR_UPLOAD_COMPANY_IMAGE')
    }
}


module.exports = { createItem, uploadImage }
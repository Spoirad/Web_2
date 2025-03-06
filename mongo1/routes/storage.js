const express = require("express")
const router = express.Router();
const { uploadMiddleware, uploadMiddlewareMemory } = require("../utils/handlestorage.js")
const { createItem, uploadImage } = require("../controllers/storage")
router.post("/local", uploadMiddleware.single("image"), createItem)
router.post("/", uploadMiddlewareMemory.single("image"),(err, req, res, next) => {
    res.status(413).send({ message: err.message })
} ,uploadImage)

module.exports = router;
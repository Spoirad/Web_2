const express = require("express")
const fs = require("fs")
const router = express.Router()

const { validatorMail } = require("../validators/mail")
const { send } = require("../controllers/mail")
//const {authMiddleware} =  require ("../middleware/authMiddleware")
router.post("/mail", validatorMail, send)

module.exports = router
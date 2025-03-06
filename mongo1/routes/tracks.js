const express = require("express")
const router = express.Router()
const { validatorCreateItem, validatorGetItem  } =  require("../validators/tracks")
const customHeader = require("../middleware/customHeader")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")
const { authMiddleware } = require("../middleware/sessions")
const { checkRol } = require("../middleware/rol")

//router.get("/", getItems)
router.get("/", authMiddleware, getItems)
router.get("/:id", validatorGetItem ,getItem)
//router.put("/:id", updateItem)
router.delete("/:id", deleteItem)
router.post("/", checkRol(["admin"]),validatorCreateItem, customHeader, createItem)

module.exports = router

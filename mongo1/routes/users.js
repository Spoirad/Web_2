const express = require("express")
const router = express.Router()

const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/users")
router.get("/", getItems)
router.get("/:id", getItem)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)
const { validatorCreateItem } =  require("../validators/users")

const customHeader = require("../middleware/customHeader")

router.post("/", validatorCreateItem, customHeader, createItem)

module.exports = router

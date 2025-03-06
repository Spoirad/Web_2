const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check("title").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("genre").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("releaseDate").exists().notEmpty(),
    validateResult
]

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    validateResult
]


module.exports = { validatorCreateItem, validatorGetItem };
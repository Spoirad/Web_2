const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator.js");

const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("age").exists().notEmpty(),
    check("password").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("role").exists().notEmpty(),
    validateResult
]

module.exports = { validatorCreateItem };
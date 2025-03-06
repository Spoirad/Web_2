const UserModel = require('../models/nosql/users.js')
const { handleHttpError } = require("../utils/handleHttpError.js");
const { matchedData } = require('express-validator')

const getItems = async (req, res) => {
    try{
        console.log(req);
        const data = await UserModel.find();
        res.send(data);   
    }catch(err){
        handleHttpError(res, 'ERROR_GET_ITEMS', 403);
    }
}

const createItem = async (req, res) => {
    try{
        const body = matchedData(req)
        const data = await UserModel.create(body)
        res.send(data)
    }catch(err){
        console.log(err);
        handleHttpError(res, 'ERROR_CREATE_ITEM');
    }
}
const updateItem =  async (req, res) => {
    
    const email = req.params.email;
    const data = await UserModel.findOneAndReplace(
        {email}, 
        req.body, {returnDocument: 'after'});
    res.json(data)
}

const deleteItem = async (req, res) => {
    const data = await UserModel.findOneAndDelete({email: req.params.email})
    res.json(data)
}

const getItem = async ({req, res}) => {
    const data = await UserModel.findOne(
        {email});
    res.json(data)
}

module.exports = {getItem, getItems, updateItem, createItem, deleteItem}
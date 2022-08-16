const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 *
 * Obtener todos los items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});

    res.send({data})
};

/**
 *
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {

};

/**
 *
 * Crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const { file } = req;
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData);

    res.send({data})
};
const updateItem = (req, res) => {

};
const deleteItem = (req, res) => {

};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
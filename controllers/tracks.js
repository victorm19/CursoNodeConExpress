const handleHttpError = require('../utils/handlerError');
const { tracksModel } = require('../models');
const { matchedData } = require('express-validator');

/**
 *
 * Obtener todos los items
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {

    try {
        const data = await tracksModel.find({});

        res.send({data})
    } catch(err) {
        handleHttpError(res, 'Error get items')
    }
};

/**
 *
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {

};

/**
 *
 * Crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {

    try {
        const body = matchedData(req);
        const data = await tracksModel.create(body);
    
        res.send({ data });
    } catch {
        handleHttpError(res, 'Error create items')
    }
};
const updateItem = async (req, res) => {

};
const deleteItem = async (req, res) => {

};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
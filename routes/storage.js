const express = require('express');
const { createItem } = require('../controllers/storage');
const router = express.Router();
const uploadMiddleware = require('../utils/handlerStorage');

/*
Single un archivo
Multi varios archivos
*/
router.post('/', uploadMiddleware.single("myfile"), createItem)

module.exports = router;
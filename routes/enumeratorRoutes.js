'use strict'

const express = require('express');
const router = express.Router();
const enumeratorsCtrl = require('../controllers/enumerators');

router.get('/', enumeratorsCtrl.sendEnum);

module.exports = router;
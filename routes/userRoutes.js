'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/', userCtrl.createUser);
router.get('/', userCtrl.getUsers);
router.get('/:userId', userCtrl.getUser);
router.put('/:userId', userCtrl.updateUser);
router.delete('/:userId', userCtrl.deleteUser);

module.exports = router;
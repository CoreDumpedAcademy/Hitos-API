'use strict';

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const Radmin = require('../middlewares/registerAdmin');

router.post('/', userCtrl.createUser);
router.post('/admin', Radmin, userCtrl.createAdmin);
router.get('/', userCtrl.getUsers);
router.get('/:userId', userCtrl.getUser);
router.get('/byName/:name', userCtrl.getUserByName);
router.post('/log', userCtrl.logUser);
router.put('/:userId', userCtrl.updateUser);
router.put('/:userId/milestones/:milestoneId', userCtrl.assignMilestone)
router.put('/:userId/milestones/:milestoneId/update', userCtrl.updateMilestone)
router.put('/:userId/milestones/:milestoneId/delete', userCtrl.unassignMilestone)
router.delete('/:userId', userCtrl.deleteUser);


module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const milestoneCtrl = require('../controllers/milestone');

router.post('/', milestoneCtrl.createMilestone);
router.get('/', milestoneCtrl.getMilestones);
router.get('/:id', milestoneCtrl.getMilestone);
router.put('/:id', milestoneCtrl.updateMilestone);
router.delete('/:id', milestoneCtrl.deleteMilestone);

module.exports = router;
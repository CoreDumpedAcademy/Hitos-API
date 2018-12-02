'use strict';

'use strict'

const express = require('express');
const router = express.Router();
const milestoneCtrl = require('../controllers/milestone');

router.post('/', milestoneCtrl.createMilestone);
router.get('/', milestoneCtrl.getMilestones);
router.get('/:milestoneId', milestoneCtrl.getMilestone);
router.get('/byWeek/:weekNumber', milestoneCtrl.getMilestoneByWeek);
router.get('/byCategory/:category', milestoneCtrl.getMilestoneByCategory);
router.put('/:milestoneId', milestoneCtrl.updateMilestone);
router.delete('/:milestoneId', milestoneCtrl.deleteMilestone);

module.exports = router;
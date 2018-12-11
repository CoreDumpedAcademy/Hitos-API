'use strict'
const enumerated = require('../middlewares/enumStructures')

function sendEnum(req, res){
	return res.status(200).send({
		milestoneTypes: enumerated.milestoneTypes,
	    milestoneDifficulty: enumerated.milestoneDifficulty,
	    teams: enumerated.teams,
	    role: enumerated.role,
	    status: enumerated.status
	})
}

module.exports = {
	sendEnum
}
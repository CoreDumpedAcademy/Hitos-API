'use strict'
const enumerated = require('../middlewares/enumStructures')

function sendEnum(req, res){
	return res.status(200).send({
		cathegory: enumerated.milestoneTypes,
	    difficulty: enumerated.milestoneDifficulty,
	    teams: enumerated.teams,
	    role: enumerated.role,
	    status: enumerated.status
	})
}

module.exports = {
	sendEnum
}
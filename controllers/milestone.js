'use strict'

const Milestone = require('../models/milestone')
const mongoose = require('mongoose')

function createMilestone(req, res){
	let milestone = new Milestone()
	
	milestone.name = req.body.name
	milestone.pwd = req.body.pwd

	milestone.save((err, MilestoneStored) => {
		if(err)
			return res.status(500).send({message: `Error al crear milestone: ${err}`})
		res.status(200).send({message: MilestoneStored})
	})
}

function getMilestone(req, res){
	let milestoneId = req.params.milestoneId

	Milestone.findById(milestoneId, (err, milestone) => {
		if(err)
			return res.status(500).send({message: `Error al realizar peticion: ${err}`})
		if(!milestone)
			return res.status(404).send({message:`El milestone no existe`})
		res.status(200).send({Milestone})
	})
}

function updateMilestone(req, res){
	let updated = req.body

	let milestoneId = req.params.milestoneId
	Milestone.findByIdAndUpdate(milestoneId, updated, (err, oldMilestone) => {
		if(err)
			return res.status(500).send({message: `Error al actualizar milestone: ${err}`})
		if(!oldMilestone)
			return res.status(404).send({message: 'El milestone no existe'})
		res.status(200).send({oldMilestone})
	})
}

function deleteMilestone(req, res){
	let milestoneId = req.params.milestoneId

	Milestone.findById(milestoneId, (err, milestone) => {
		if(err)
			return res.status(500).send({message: `Error al borrar milestone: ${err}`})
		if(!milestone)
			return res.status(404).send({message:`El milestone no existe`})
		milestone.remove(err => {
			if(err)
				return res.status(500).send({message: `Error al borrar milestone: ${err}`})
			res.status(200).send({message: 'El milestone ha sido borrado'})
		})
	})
}

module.exports{
	createMilestone,
	getMilestone,
	updateMilestone,
	deleteMilestone,
}

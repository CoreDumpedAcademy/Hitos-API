'use strict'

const Milestone = require('../models/milestone')
const mongoose = require('mongoose')

function createMilestone(req, res){
	let milestone = new Milestone()
	
	milestone.author = req.body.author
	milestone.week = req.body.week
	milestone.title = req.body.title
	milestone.description = req.body.description
	milestone.theme = req.body.theme
	milestone.level = req.body.level


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
		res.status(200).send({milestone})
	})
}

function getMilestoneByWeek (req, res) {
	let weekNumber = req.params.weekNumber

	Milestone.find({week:weekNumber}, (err, milestones) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!milestones) return res.status(404).send({message: 'No existen el milestones para esa semana'})
	
		res.status(200).send(milestones)
	})
}

function getMilestones (req, res) {
	Milestone.find({}, (err, milestones) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!milestones) return res.status(404).send({message: 'No existen hitos'})
	
		res.status(200).send({milestones})
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

module.exports = {
	createMilestone,
	getMilestone,
	updateMilestone,
	deleteMilestone,
	getMilestones,
	getMilestoneByWeek
}
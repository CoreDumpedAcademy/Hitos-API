'use strict'

const User = require('../models/user')
const mongoose = require('mongoose')
const service = require('../services')

function createUser(req, res){
	let user = new User()
	
	user.userName = req.body.userName
	user.password = req.body.password

	user.save((err, userStored) => {
		if(err)
			return res.status(500).send({message: `Error al crear usuario: ${err}`})
		res.status(200).send({message: userStored})
	})
}

function getUsers (req, res) {
	User.find({}, (err, users) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!users) return res.status(404).send({message: 'No existen usuarios'})
	
		res.status(200).send({users})
	})
}

function getUserByName (req, res) {
	let name = req.params.name

	User.find({userName:name}, (err, user) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!user) return res.status(404).send({message: 'No existen el usuario'})
	
		res.status(200).send(user)
	})
}

function getUser(req, res){
	let userId = req.params.userId

	User.findById(userId, (err, user) => {
		if(err)
			return res.status(500).send({message: `Error al realizar peticion: ${err}`})
		if(!user)
			return res.status(404).send({message:`El usuario no existe`})
		res.status(200).send({user})
	})
}

function updateUser(req, res){
	let updated = req.body
	let userId = req.params.userId

	User.findByIdAndUpdate(userId, updated, (err, oldUser) => {
		if(err)
			return res.status(500).send({message: `Error al actualizar usuario: ${err}`})
		res.status(200).send({oldUser})
	})
}

function deleteUser(req, res){
	let userId = req.params.userId

	User.findById(userId, (err, user) => {
		if(err)
			return res.status(500).send({message: `Error al borrar usuario: ${err}`})
		if(!user)
			return res.status(404).send({message:`El usuario no existe`})
		user.remove(err => {
			if(err)
				return res.status(500).send({message: `Error al borrar usuario: ${err}`})
			res.status(200).send({message: `El usuario ha sido borrado`})
		})
	})
}

module.exports = {
	createUser,
	getUser,
	updateUser,
	deleteUser,
	getUsers,
	getUserByName
}
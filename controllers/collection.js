'use strict'

const Collection = require('../models/collection')
const mongoose = require('mongoose')

function createCollection(req, res){
	let collection = new Collection()
	
	collection.name = req.body.name
	collection.pwd = req.body.pwd

	collection.save((err, CollectionStored) => {
		if(err)
			return res.status(500).send({message: `Error al crear colección: ${err}`})
		res.status(200).send({message: CollectionStored})
	})
}

function getCollection(req, res){
	let CollectionId = req.params.CollectionId

	Collection.findById(CollectionId, (err, Collection) => {
		if(err)
			return res.status(500).send({message: `Error al realizar peticion: ${err}`})
		if(!Collection)
			return res.status(404).send({message:`El usuario no existe`})
		res.status(200).send({Collection})
	})
}

function updateCollection(req, res){
	let updated = req.body

	let CollectionId = req.params.CollectionId
	Collection.findByIdAndUpdate(CollectionId, updated, (err, oldCollection) => {
		if(err)
			return res.status(500).send({message: `Error al actualizar usuario: ${err}`})
		res.status(200).send({oldCollection})
	})
}

function deleteCollection(req, res){
	let CollectionId = req.params.CollectionId

	Collection.findById(CollectionId, (err, Collection) => {
		if(err)
			return res.status(500).send({message: `Error al borrar usuario: ${err}`})
		if(!Collection)
			return res.status(404).send({message:`El usuario no existe`})
		Collection.remove(err => {
			if(err)
				return res.status(500).send({message: `Error al borrar usuario: ${err}`})
			res.status(200).send({message: `El usuario ha sido borrado`})
		})
	})
}

module.exports{
	createCollection,
	getCollection,
	updateCollection,
	deleteCollection,
}

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const enumerated = require('../middlewares/enumStructures')

const MilestoneSchema = new Schema({
  //_id: { type: String },
  author: { type: Schema.Types.ObjectId, ref: enumerated.modelsName.user },
  week: { type: Number, required: true, min: 0, max: 52},
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: enumerated.milestoneTypes, required: true },
  level: { type: String, enum: enumerated.milestoneDifficulty },
  creation: { type: Date, default: Date.now() }
})

	
module.exports = mongoose.model(enumerated.modelsName.milestone, MilestoneSchema)
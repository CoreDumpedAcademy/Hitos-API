'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MilestoneSchema = new Schema({
  _id: { type: String },
  author: { type: String },
  title: { type: String },
  description: { type: String },
  theme: { type: String, enum: ['Develop', 'VideoGames', 'Design'] },
  level: { type: String, enum: ['Easy', 'Medium', 'Hard', 'Team']  },
  importantURL: { type:  [String] },
  creation: { type:  Date, default: Date.now()}
})

	
module.exports = mongoose.model('Milestone', MilestoneSchema)
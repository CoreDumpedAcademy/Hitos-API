'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const milestoneCollection = new Schema({
  _id: { type: String  },
  milestonesCollection: { 
    theme: { type: String, enum: enumerated.teams },
    milestonesByTheme: [{ 
      milestone: { type: [Schema.Types.ObjectId], ref: 'Milestone'},
      done: { type: Boolean, default: false }
    }]
  }
})
  

module.exports = mongoose.model('MilestoneCollection', milestoneCollection)
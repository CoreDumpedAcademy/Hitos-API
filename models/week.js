'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WeekSchema = new Schema({
  _id: { type: String  },
  week: { type: Number  },
  meeting: { type: Boolean },
  meetingDate: { type: Date },
  milestoneID: { type: [String] },
  creation: { type:  Date, default: Date.now() }
})
  

module.exports = mongoose.model('Week', WeekSchema)
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  _id: { type: String  },
  userName: { type: String, unique: true},
  firstName: { type: String  },
  lastName: { type: String  },
  role: { type: String, enum: ['admin', 'mentor', 'teamPartner', 'corer'] },
  team: { type: String, enum: ['general', 'developer', 'game']}
  password: { type: String  },
  idTelegram: { type: String },
  githubURL: { type: String },
  pendingDesign: { type: Number  },
  pendingDeveloper: { type: Number },
  pendingGame: { type: Number },
  doneDesign: { type: Number  },
  doneDeveloper: { type: Number },
  doneGame: { type: Number },
  meetingsAsisted: { type: Number},
  importantURL: { type: [String] },
  titleURL: { type: [String] },
  creation: { type:  Date, default: Date.now()},
  lastLogin: { type:  Date   },
  active: { type: Boolean }
})


module.exports = mongoose.model('User', UserSchema)
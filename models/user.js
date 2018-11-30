'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema
const enumerated = require('../middlewares/enumStructures')

const UserSchema = new Schema({
  //_id: { type: String  },
  userName: { type: String, unique: true, required: true },
  firstName: { type: String  },
  lastName: { type: String  },
  role: { type: String, enum: enumerated.role },
  team: { type: String, enum: enumerated.teams },
  password: { type: String },// required: true },
  idTelegram: { type: String },
  githubURL: { type: String },
  //pendingDesign: { type: Number  },
  //pendingDeveloper: { type: Number },
  //pendingGame: { type: Number },
  //doneDesign: { type: Number  },
  //doneDeveloper: { type: Number },
  //doneGame: { type: Number },
  //meetingsAsisted: { type: Number },
  milestonesCollection: [
    {
      milestone: {
        type: Schema.Types.ObjectId,
        ref: enumerated.modelsName.milestone
      },
      status: { type: String, enum: enumerated.status ,default: enumerated.status[0] }
    }
  ],
  personalLinks: [{
    text: { type: String },
    url: { type: String }
  }],
  creation: { type: Date, default: Date.now()},
  lastLogin: { type: Date },
  active: { type: Boolean }
})

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err)
      this.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  console.log(this.password)
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  });
}


module.exports = mongoose.model(enumerated.modelsName.user, UserSchema)
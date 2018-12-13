'use strict'
// const user = require ('../models/User');
const config = require('../config');
const enume = require('./enumStructures');


module.exports = function isRole(req, res,next) {

  User.finOne({_id: req.User})
  .select('+role')
  .exec((err, user)=>{
    if(err) res.status(500).send({ message: 'Internal error'});
    if(!user) res.status(401).send({ message: 'Unauthorized'});
    console.log(enume.role[0]);
    if(user.role == enume.role[0]){
      next()
    } else {
      res.status(401).send({ message: 'Unauthorized'});
    }
  })
}

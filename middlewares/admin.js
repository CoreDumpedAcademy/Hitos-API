'use strict'
// const user = require ('../models/User');
const config = require('../config');


module.exports = function isRole(req, res,next) {

  User.finOne({_id: req.User})
  .select('+role')
  .exec((err, user)=>{
    if(err) res.status(500).send({ message: 'Internal error'});
    if(!user) res.status(401).send({ message: 'Unauthorized'});

    if(user.role === 'admin'){
      next()
    } else {
      res.status(401).send({ message: 'Unauthorized'});
    }
  })
}

'use strict'
const config = require('../config')

module.exports = function isRole(req, res, next) {
  console.log('La adminPass esta ???')
  if(req.headers.authorization == config.adminPass) {
    console.log('La adminPass esta bien')
    next()
  }
  else{
    res.status(401).send({ message: 'Unauthorized'});
  }



}

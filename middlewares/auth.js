'use strict'

const services = require('../services/token');
const token = require('../models/user');
const config = require('../config');
const bodyParser = require('body-parser');
const morgan = require('morgan');

function isAuth(req, res, next){
  if (!req.headers.authorization){
    return res.status(403).send({ message: "No tienes autorización"});
  }

  const token = req.headers.authorization.split("")[1]

  services.decodeToken(token)
   .then(response => {
     req.user = response
     next()
   })
   .catch(response => {
     res.status(response.status)
   })
 }

 module.exports = isAuth

   //req.user o findOne?

'use strict'

const token = require('../services/token');
const model = require('../models/user');
const config = require('../config');
const bodyParser = require('body-parser');
const enumerated = require('../middlewares/enumStructures');
const mongoose = require('mongoose');
const User = mongoose.model(enumerated.modelsName.user);


function isAuth(req, res, next){
  if (!req.headers.authorization){
    return res.status(403).send({ message: "No tienes autorización"});
  }
  console.log(req.headers);
  const tokenReq = req.headers.authorization.split(" ")[1];

  	const logUser = new User(req.body);
    let tok = logUser.userName

  token.decodeToken(tokenReq)
   .then(response => {
     User.findOne({userName:tok})
      .exec((err, user) => {
        if (err) return res.status(500).send({ message: 'Internal error'});
        if (!user) return res.status(401).send({ message: 'Unauthorized'});

        req.user = response;
        next ()
      })

   })
   .catch(response => {
     return res.status(401).send({ message: 'Unauthorized'})
   })
 }

 module.exports = isAuth;

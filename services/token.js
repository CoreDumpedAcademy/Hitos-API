'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');
const services = require('../services');

function createToken (user) {
  const payload = {
    sub:services.encrypt(String(user._id)),
    iat: moment.unix(),
    exp: moment().add(14, 'days').unix(),
    logged: isLogged,
    admin: isAdmin,
  };
  return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken (token){
  const decoded = new Promise((resolve, reject)  => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN);

      if (payload.exp <= moment().unix()) {
         reject({
           status:401,
           message: 'El token ha expirado'
        })
      }
      var userId = services.decrypt(payload.sub);
      resolve(userId)
    } catch(err) {
      reject({
        status:500,
        message: 'Token no valido'
          })
        }
      })
    }
    module.exports ={
      generate,
      decode
    };

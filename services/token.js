'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');


function createToken (user) {
  const payload = {
    sub:jwt.encode(payload, config.SECRET_TOKEN),
    iat: moment.unix(),
    exp: moment().add(14, 'days').unix(),
    logged: isLogged,
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
           message: 'El token ha expirado',
        })
      }
      var userId = jwt.encode(payload, config.SECRET_TOKEN)
      resolve(userId);
    } catch(err) {
      reject({
        status:500,
        message: 'Token no valido',
          })
        }
      })
    }
    module.exports ={
      createToken,
      decodeToken
    };

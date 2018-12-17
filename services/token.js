"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");
const config = require("../config");

function createToken(user) {
  const payload = {
    sub: user._id,
    iat: moment.unix(),
    exp: moment()
      .add(14, "days")
      .unix(),
    logged: user.isLogged
  };
  return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token) {
  return new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN);

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: "El token ha expirado"
        });
      }
      var userId = payload.sub;
      resolve(userId);
    } catch (err) {
      reject({
        status: 500,
        message: "Token no valido"
      });
    }
  });
}

module.exports = {
  createToken,
  decodeToken
};

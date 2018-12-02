'use strict';

const crypto = require('crypto');
const config = require('../config');


function normEmail(email){
  return email.toLowerCase();
}

function isAdmin(user){
  return user.admin == config.ADMIN_TOKEN
}

module.exports ={

  normEmail,
  isAdmin,
};

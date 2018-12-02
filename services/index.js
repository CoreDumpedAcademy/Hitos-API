'use strict';

const crypto = require('crypto');
const config = require('../config');


function normEmail(email){
  return email.toLowerCase();
}



module.exports ={

  normEmail,
  
};

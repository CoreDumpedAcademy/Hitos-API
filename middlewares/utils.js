"use strict";

const enumerated = require("../middlewares/enumStructures");

function check(milestoneList, hito) {
  return new Promise(function(resolve, reject) {
    milestoneList.push({ milestone: hito, status: enumerated.status[0] });
    resolve();
  });
}

module.exports = {
  check
};

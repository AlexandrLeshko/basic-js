const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)) {
    for (let i of members) {
      if (typeof i === 'string') result.push(i);
    }
    result = result.flat().filter(n => typeof n === 'string' || Array.isArray(n)).map((word) => word.replace(/\s/g, '')[0]).sort((a, b) => a.localeCompare(b)).join('').toUpperCase();
    return result;
  } 
  return false;
}

module.exports = {
  createDreamTeam
};
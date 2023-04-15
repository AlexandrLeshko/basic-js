const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let tempDomains = domains[i].split('.').reverse();
    let domainConstructor = '';
    for (let j = 0; j < tempDomains.length; j++) {
      domainConstructor += `.${tempDomains[j]}`;
      result[domainConstructor] === undefined ? result[domainConstructor] = 1 : result[domainConstructor]++;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

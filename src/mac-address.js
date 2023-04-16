const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  return !n.split('-').map((elem) => { return /[0-9A-F][0-9A-F]/.test(elem) && (elem.length === 2) }).includes(false);
}

module.exports = {
  isMAC48Address
};
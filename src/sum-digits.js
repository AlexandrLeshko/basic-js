const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  let result = 0;
  for (let i of String(n).split('')) {
    result += +i;
  }
  if (String(result).length > 1) {
    return getSumOfDigits(String(result));
  } else {
    return result;
  }
}

module.exports = {
  getSumOfDigits
};
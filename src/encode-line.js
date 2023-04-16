const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  str = str.split('');
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      result += (counter === 1 ? '' : counter) + str[i];
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit( n ) {
  let numArr = n.toString().split('');
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    numArr.splice(i, 1);
    if (+numArr.join('') > result) {
      result = +numArr.join('');
    }
    numArr = n.toString().split('');
  }
  return result;
}

module.exports = {
  deleteDigit
};

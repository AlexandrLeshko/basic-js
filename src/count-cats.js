const { NotImplementedError } = require('../extensions/index.js');

function countCats( matrix ) {
  let i = 0;
  for (let item of matrix.flat()) {
    if (item === '^^') i++ ;
  }
  return i;
}

module.exports = {
  countCats
};
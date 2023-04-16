const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let result = 0;
  let cols = matrix[0].map(() => { return matrix.length });
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 && i < cols[j]) cols[j] = i;
      if (i < cols[j]) result += matrix[i][j];
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
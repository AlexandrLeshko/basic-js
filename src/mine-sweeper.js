const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < matrix.length; row++) {
    for (let item = 0; item < matrix[row].length; item++) {
      result[row][item] = 0;
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let item = 0; item < matrix[row].length; item++) {
      if (matrix[row][item] === true) {
        for (let i = row - 1; i <= row + 1; i++) {
          for (let j = item - 1; j <= item + 1; j++) {
            if (i >= 0 && j >= 0 && i < matrix.length && j < matrix[i].length) {
              result[i][j]++;
            }
          }
        }
      }
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let item = 0; item < matrix[row].length; item++) {
      if (matrix[row][item] === true) {
        result[row][item] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
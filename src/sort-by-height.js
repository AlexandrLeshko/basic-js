const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight( arr ) {
  let bannedIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) bannedIndexes.push(i);
  }
  arr = arr.filter(i => i !== -1);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < bannedIndexes.length; i++) {
    arr.splice(bannedIndexes[i], 0, -1)
  }
  return arr;
}

module.exports = {
  sortByHeight
};
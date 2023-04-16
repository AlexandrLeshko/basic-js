const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let bannedIndexes = [];
  let tempArr = arr.slice(0);
  for (let i = 0; i < tempArr.length; i++) {
    switch (tempArr[i]) {
      case ('--discard-prev'):
        if (tempArr[i - 1] === undefined || bannedIndexes.includes(i - 1)) {
          tempArr.splice(i, 1);
        } else {
          bannedIndexes.push(i - 2);
          tempArr.splice(i - 1, 2);
          i -= 2;
        }
        break;
      case ('--discard-next'):
        if (tempArr[i + 1] === undefined || bannedIndexes.includes(i + 1)) {
          tempArr.splice(i, 1);
        } else {
          bannedIndexes.push(i - 1);
          tempArr.splice(i, 2);
          i -= 1;
        }
        break;
      case ('--double-prev'):
        if (tempArr[i - 1] === undefined || bannedIndexes.includes(i - 1)) {
          tempArr.splice(i, 1);
        } else {
          bannedIndexes.push(i);
          tempArr.splice(i, 1, tempArr[i - 1]);
        }
        break;
      case ('--double-next'):
        if (tempArr[i + 1] === undefined || bannedIndexes.includes(i + 1)) {
          tempArr.splice(i, 1);
        } else {
          bannedIndexes.push(i);
          tempArr.splice(i, 1, tempArr[i + 1]);
        }
        break;
      default:
        break;
    }
  }
  return tempArr;
}

module.exports = {
  transform
};

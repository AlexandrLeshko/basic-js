const { NotImplementedError } = require('../extensions/index.js');

function renameFiles( names ) {
  let result = [];
  for (let i of names) {
    if (!result.includes(i)) {
      result.push(i);
    } else if (!result.includes(`${i}(1)`)){
      result.push(`${i}(1)`);
    } else {
      result.push(`${i}(2)`);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
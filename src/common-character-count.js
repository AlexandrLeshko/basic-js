const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount( s1, s2 ) {
  s1 = s1.split('');
  s2 = s2.split('');
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        s1.splice(i, 1);
        s2.splice(j, 1);
        i = 0;
        j = 0;
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
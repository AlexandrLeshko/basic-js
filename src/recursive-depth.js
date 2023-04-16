const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let depth = 0;
    for (let i of arr) {
      let tempDepth = this.calculateDepth(i);
      if (tempDepth > depth) depth = tempDepth;
    }
    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};
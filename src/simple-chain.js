const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || isNaN(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let endChain = this.chain.slice(0);
    this.chain = [];
    return endChain.join('~~');
  }
};

module.exports = {
  chainMaker
};
const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(direction = true) {
    this['ALPHABET'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direction = direction;
    this.encriptedLetter = this.getEncriptedLetter();
  }
  getEncriptedLetter() {
    let alphabet = this['ALPHABET'];
    let encriptedLetter = [];
    for (let i = 0; i < alphabet.length; i++) encriptedLetter[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
    return encriptedLetter;
  }
  encrypt(msg, key) {return this.crypt(msg, key, true)};
  decrypt(msg, key) {return this.crypt(msg, key, false);}
  crypt(msg, key, encrypt) {
    if (!msg || !key) throw Error('Incorrect arguments!');
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    while (key.length < msg.length) key += key;
    let result = '';
    let index = 0;
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] !== ' ' && this['ALPHABET'].includes(msg[i])) {
        if (encrypt) {
          result += this.encriptedLetter[this['ALPHABET'].indexOf(msg[i])][this['ALPHABET'].indexOf(key[index])];
        } else {
          result += this['ALPHABET'][this.encriptedLetter[this['ALPHABET'].indexOf(key[index])].indexOf(msg[i])];
        }
        index++;
      } else {
        result += msg[i];
      }
    }
    if (!this.direction) {return result.split('').reverse().join('')};
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
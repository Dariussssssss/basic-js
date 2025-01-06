const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    // Check if arguments are missing
    if (message === undefined || key === undefined) {
      throw new Error('Invalid arguments!');
    }
    let result = '';
    let keyIndex = 0;
    message = message.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (/[a-zA-Z]/.test(char)) {
        const shift = key[keyIndex % key.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        let charCode = char.charCodeAt(0);
        if (/[a-z]/.test(char)) {
          charCode = ((charCode - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0);
        } else if (/[A-Z]/.test(char)) {
          charCode = ((charCode - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0);
        }
        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Invalid arguments!');
    }
    let result = '';
    let keyIndex = 0;
    message = message.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (/[a-zA-Z]/.test(char)) {
        const shift = key[keyIndex % key.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        let charCode = char.charCodeAt(0);
        if (/[a-z]/.test(char)) {
          charCode = ((charCode - 'a'.charCodeAt(0) - shift + 26) % 26) + 'a'.charCodeAt(0);
        } else if (/[A-Z]/.test(char)) {
          charCode = ((charCode - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0);
        }
        result += String.fromCharCode(charCode);
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

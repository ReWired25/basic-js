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
  constructor(arg = true) {
      arg ? this.isReverse = false : this.isReverse = true;
      this.alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  makeKey(w, k) {
      let word = w.toUpperCase();
      let keyword = k.toUpperCase();
      let key = '';

      // let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      for (let i = 0, j = 0; key.length < word.length; i++, j++) {
          if (!this.alph.includes(word[j])) {
              key += ' ';
              i = i - 1;
          } else {
              if (!keyword[i]) i = 0;
              key += keyword[i];
          }
      }

      return [word, key];
  }

  encrypt(w, k) {
      if (!w || !k) {
          throw new Error('Incorrect arguments!');
      }

      let [word, key] = this.makeKey(w, k);

      let finalWord = '';

      for (let i = 0; i < word.length; i++) {
          if (!this.alph.includes(word[i])) {
              finalWord += word[i];
              continue;
          }

          let openChar = this.alph.indexOf(word[i]);
          let keyChar = this.alph.indexOf(key[i]);

          let finalChar = openChar + keyChar;
          if (finalChar > 25) finalChar = finalChar - 25 - 1;

          finalWord += this.alph[finalChar];
      }

      if (this.isReverse) finalWord = finalWord.split('').reverse().join('');

      return finalWord;
  }

  decrypt(w, k) {
      if (!w || !k) {
          throw new Error('Incorrect arguments!');
      }

      let [word, key] = this.makeKey(w, k);

      let finalWord = '';

      for (let i = 0; i < word.length; i++) {
          if (!this.alph.includes(word[i])) {
              finalWord += word[i];
              continue;
          }

          let openChar = this.alph.indexOf(word[i]);
          let keyChar = this.alph.indexOf(key[i]);

          let finalChar = openChar - keyChar;
          if (finalChar < 0) finalChar = finalChar + 25 + 1;

          finalWord += this.alph[finalChar];
      }

      if (this.isReverse) finalWord = finalWord.split('').reverse().join('');

      return finalWord;
  }
}

module.exports = {
  VigenereCipheringMachine
};

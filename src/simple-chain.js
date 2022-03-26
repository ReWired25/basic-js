const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],
  getLink() {
      return this.values.length;
  },
  addLink(value) {
      if (value === undefined) this.values.push('( )');
      this.values.push(`( ${value} )`);
      return chainMaker;
  },
  removeLink(position) {
      if (typeof position !== 'number' ||
          !Number.isInteger(position) ||
          this.values[position - 1] === undefined ||
          position === 0) {
              this.values.length = 0;
              throw new Error(`You can't remove incorrect link!`);
          }
      this.values.splice(position - 1, 1);
      return chainMaker;
  },
  reverseChain() {
      this.values.reverse();
      return chainMaker;
  },
  finishChain() {
      let finalStr = this.values.join('~~');
      this.values.length = 0;
      return finalStr;
  }
};

module.exports = {
  chainMaker
};

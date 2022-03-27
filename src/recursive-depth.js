const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
      this.arr = [];
  }

  calculateDepth(arr, count = 1, status = 1) {
      let checkArr = true;

      for (let item of arr) {
          if (Array.isArray(item)) {
              checkArr = false;

              this.calculateDepth(item, count + 1, 0);
          }
      }

      if (checkArr) {
          this.arr.push(count);
      }

      if (status) {
          let finalNum = Math.max(...this.arr);
          this.arr.length = 0;
          return finalNum;
      }
  }
}

module.exports = {
  DepthCalculator
};

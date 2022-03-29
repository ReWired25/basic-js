const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let units = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) units.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) arr.splice(i, 1), i = i - 1;
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < units.length; i++) {
      arr.splice(units[i], 0, -1);
  }

  return arr;
}

module.exports = {
  sortByHeight
};

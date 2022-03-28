const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  if (arr.length === 0) return {};
  
  let obj = {};
  let finalObj = {};

  let newSet = new Set();

  for (let item of arr) {
      let inArr = item.split('.');

      for (let elem of inArr) {
          newSet.add(elem);
      }
  }

  let valuesSet = new Set();

  for (let item of arr) {
      for (let key of newSet) {
          if (item.includes(key)) valuesSet.add(item);
      }
  }
  
  valuesSet.add(arr[0].slice(arr[0].lastIndexOf('.') + 1));

  for (let value of valuesSet) {
      let count = 0;

      for (let item of arr) {
          if (item.includes(value)) count++;
      }

      obj[value] = count;
  }

  for(let [key, value] of Object.entries(obj)) {
      finalKey = `.${key.split('.').reverse().join('.')}`;
      finalObj[finalKey] = value;
  }

  return finalObj;
}

module.exports = {
  getDNSStats
};

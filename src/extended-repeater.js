const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  let finalStr = ''
  str === null ? finalStr = 'null' : finalStr = str + '';
  let obj = options;

  if (!(obj.addition === undefined)) {
      if (obj.addition === null) obj.addition = 'null';

      if (obj.additionRepeatTimes) {
          let arr = [];

          arr.length = obj.additionRepeatTimes;
          arr.fill(obj.addition + '');

          if (obj.additionSeparator) {
              arr = arr.join(`${obj.additionSeparator}`)
          } else {
              arr = arr.join('|');
          }

          finalStr += arr;
      } else {
          finalStr += obj.addition + '';
      }
  }

  if (obj.repeatTimes) {
      let arr = [];

      arr.length = obj.repeatTimes;
      arr.fill(finalStr);
      
      if (obj.separator) {
          finalStr = arr.join(`${obj.separator}`);
      } else {
          finalStr = arr.join('+');
      }
  }

  return finalStr;
}

module.exports = {
  repeater
};

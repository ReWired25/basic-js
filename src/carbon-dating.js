const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const sampleAct = +sampleActivity;

  if (sampleAct <= 0 || sampleAct > 15 || isNaN(sampleAct)) {
      return false;
  }

  const modernAct = 15;
  const halfLifePer = 5730;

  let result = Math.log(modernAct / sampleAct) / (0.693 / halfLifePer);

  return Math.ceil(result);
}

module.exports = {
  dateSample
};

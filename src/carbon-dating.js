const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample( sampleActivity = 'default') {
  if (sampleActivity === 'default' || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity >= MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * (HALF_LIFE_PERIOD / 0.693));
}

module.exports = {
  dateSample
};

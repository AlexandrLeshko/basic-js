const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample( sampleActivity = 'default') {
  return (sampleActivity === 'default' || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity >= MODERN_ACTIVITY || sampleActivity <= 0) ? false : Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * (HALF_LIFE_PERIOD / 0.693));
}

module.exports = {
  dateSample
};
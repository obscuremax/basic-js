const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(m) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  let t
  if (m === String(m) && parseFloat(m) < 15 && parseFloat(m) > 0) {
    t = Math.ceil(Math.log( (MODERN_ACTIVITY / parseFloat(m)).toFixed(15))/ k)
  } else {
    t = false
  }
  return t
};

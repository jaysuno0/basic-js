const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

 function dateSample(sampleActivity) {
  let result = false;

  if (sampleActivity &&
      typeof sampleActivity === 'string' &&
      Number(sampleActivity) > 0) {
        sampleActivity = Number(sampleActivity);
        let reaction = 0.693 / HALF_LIFE_PERIOD;
        result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / reaction);
  }
  
  return result > 0 ? result : false;
}

module.exports = {
  dateSample
};

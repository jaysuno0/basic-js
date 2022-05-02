function calculateHanoi(disksNumber, turnsSpeed) {
  const minTurnsNumber = Math.pow(2, disksNumber) - 1;
  const time = Math.floor((minTurnsNumber * 60 * 60) / turnsSpeed);

  return {
    turns: minTurnsNumber,
    seconds: time,
  }
}

module.exports = {
  calculateHanoi
};
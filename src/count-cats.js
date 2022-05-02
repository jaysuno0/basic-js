function countCats(matrix) {
  let cats = 0;

  matrix.forEach(row => row.forEach(item => item === '^^' && cats++));
  
  return cats;
}

module.exports = {
  countCats
};

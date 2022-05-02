function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += i ? (matrix[i - 1][j] ? matrix[i][j] : 0) : matrix[i][j];
    }
  }

  return sum;
}


module.exports = {
  getMatrixElementsSum
};

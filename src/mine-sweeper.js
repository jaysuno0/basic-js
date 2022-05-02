function minesweeper(matrix) {
  if (matrix.length !== matrix[0].length) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (typeof(matrix[i][j]) !== 'number') matrix[i][j] = 0;
      }
    }

    return matrix;
  }


  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 1 ; j < matrix[0].length - 1; j++) {
      if (matrix[i][i] === matrix[i + 1][i + 1] && matrix[i][j] === matrix[i + 1][j - 1]) {
        matrix[i][j] = 2 ;
        matrix[i + 1][j - 1] = 2;
        break;
      }
    }
  }


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0 ; j < matrix[0].length; j++) {
      if (typeof matrix[i][j] !== 'number') matrix[i][j] = 1;
    }
  }

  return matrix
}


module.exports = {
  minesweeper
};

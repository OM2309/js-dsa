var setZeroes = function (matrix) {
  let storeValue = [];

  // Step 1: Store positions of zeroes
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        storeValue.push([i, j]);
      }
    }
  }

  for (let k = 0; k < storeValue.length; k++) {
    const [row, col] = storeValue[k];

    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

// Output:
// [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1]
// ]

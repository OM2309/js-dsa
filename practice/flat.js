const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let finalArray = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    finalArray.push(arr[i][j]);
  }
}

console.log(finalArray);

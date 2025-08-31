// var peakIndexInMountainArray = function (arr) {
//   let peakValue = -Infinity;
//   let peakIndex = -1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > peakValue) {
//       peakValue = arr[i];
//       peakIndex = i;
//     }
//   }

//   return peakIndex;
// };

// console.log(peakIndexInMountainArray([0, 1, 0])); // 1
// console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
// console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1

var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1

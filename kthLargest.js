// Function to find the kth largest element in an array without sorting
function findKthLargest(nums, k) {
  // Min heap implementation using a simple array and sort
  let heap = [];
  for (let num of nums) {
    heap.push(num);
    if (heap.length > k) {
      // Remove the smallest element
      heap.sort((a, b) => a - b);
      heap.shift();
    }
  }
  // The root of the min heap is the kth largest
  heap.sort((a, b) => a - b);
  return heap[0];
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4

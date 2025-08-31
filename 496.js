var nextGreaterElement = function (nums1, nums2) {
  let ans = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        ans.push(nums2[j]);
        break;
      }
    }
    ans.push(-1);
  }

  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 2, 3, 4]));

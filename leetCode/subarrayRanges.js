const subArrayRanges = function (nums) {
  let N = nums.length;
  let total = 0;
  for (let i = 0; i < N; i++) {
    let smallest = nums[i];
    let largest = nums[i];
    for (j = i + 1; j < N; j++) {
      smallest = Math.min(smallest, nums[j]);
      largest = Math.max(largest, nums[j]);
      total += largest - smallest;
    }
  }
  return total;
};

console.log(subArrayRanges([4,-2,-3,4,1]))
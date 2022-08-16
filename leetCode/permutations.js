// 46. Permutations
const permute = function (nums) {
  // a global result
  const result = [];

  // dfs recursive helper
  const dsf = function (i, nums) {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    // dfs recursive case
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dsf(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dsf(0, nums);
  return result;
};

// Driver code.
console.log(permute([1, 2, 3]));

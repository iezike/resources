var twoSum = function (nums, target) {
  nums.sort((a, b) => {
    return a - b;
  });
  var hash = {};
  var len = nums.length;
  let lowerIdx = len;
  let higherIdx = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) {
      lowerIdx = Math.min(hash[nums[i]], lowerIdx);
      higherIdx = Math.max(i, higherIdx);
    }
    hash[target - nums[i]] = i;
  }
  return [lowerIdx, higherIdx];
};

// // 1. Two Sum
// const twoSum = function (nums, target) {
//   const storage = {};
//   for (let [i, num] of nums.entries()) {
//     if (storage[num] !== undefined) {
//       return [target - num, num];
//     }
//     storage[target - num] = i;
//   }
// };
console.log(twoSum([11, 2, 15, 7, 1, 8], 9));

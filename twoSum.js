// var twoSum = function(nums, target) {
//   var hash = {};
//   var len = nums.length;
//   for (var i = 0; i < len; i++) {
//     if (nums[i] in hash) return [hash[nums[i]], i];
//     hash[target - nums[i]] = i
//   }
//   return [-1, -1];
// };

// 1. Two Sum
const twoSum = function (nums, target) {
  const storage = {};
  for (let [i, num] of nums.entries()) {
    if (storage[num] !== undefined) {
      return [storage[num], i];
    }
    storage[target - num] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

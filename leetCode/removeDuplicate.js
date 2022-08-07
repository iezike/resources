// 26. Remove Duplicates from Sorted Array

// var removeDuplicates = function (nums) {
//   let hash = {};
//   let count = 0;
//   for (let num = 0; num < nums.length; num++) {
//     let curNum = nums[num];
//     if (hash[curNum] === undefined) {
//       hash[curNum] = num;
//       count++;
//     }
//   }
//   return count;
// };

var removeDuplicates = function (nums) {
  let j = 1;
  for (let num = 0; num < nums.length - 1; num++) {
    if (nums[num] !== nums[num + 1]) {
      nums[j] = nums[num + 1];
      j++;
    }
  }
  return j;
};

console.log(removeDuplicates([1, 1, 2]));

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
// console.log(twoSum([2, 7, 11, 15], 17))
// ---------------------------------------------------------
// 26. Remove Duplicates from Sorted Array
const removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  const uniqueNums = {};
  for (let [i, num] of nums.entries()) {
    uniqueNums[num] = i;
  }
  return Object.keys(uniqueNums).length;
};

// console.log(removeDuplicates([1, 1, 2]));
// ---------------------------------------------------------

// 27. Remove Element
const removeElement = function (nums, val) {
  if (!nums) return 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

// console.log(removeElement([0,1,2,2,3,0,4,2],2))
// ---------------------------------------------------------

// 33. Search in Rotated Sorted Array
const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m;
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target <= nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (nums[m] <= target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};
// console.log(search([4,5,6,7,0,1,2], 3))
// ------------------------------------------------------

// 35. Search Insert Position
const searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m;
    if (target < nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};

// console.log(searchInsert([1,3,5,6],8))
// ------------------------------------------------------

// 39. Combination Sum 
const combinationSum = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  // dfs helper
  const dfs = function (i, candidates, target, slate) {
    // backtracking case
    if (target < 0) return;

    //base case
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
}
// let helperCombinationSum = function (
//   res,
//   stack,
//   index,
//   len,
//   candidates,
//   target
// ) {
//   let tmp = null;
//   if (target < 0) return;
//   if (target === 0) return res.push(stack);
//   for (let i = index; i < len; i++) {
//     if (candidates[i] > target) break;
//     tmp = Array.from(stack);
//     tmp.push(candidates[i]);
//     helperCombinationSum(res, tmp, i, len, candidates, target - candidates[i]);
//   }
// };

// let combinationSum = function (candidates, target) {
//   var res = [];
//   var len = candidates.length;
//   candidates.sort((a, b) => a - b);
//   helperCombinationSum(res, [], 0, len, candidates, target);
//   return res;
// };
// console.log(combinationSum([2,3,5],8))
// ------------------------------------------------------

// 39. Combination Sum (Alternatively)
// var combinationSumA = function (candidates, target) {
//   var res = [];
//   var len = candidates.length;
//   candidates.sort((a, b) => a - b);
//   dfs(res, [], 0, len, candidates, target);
//   return res;
// };

// var dfs = function (res, stack, index, len, candidates, target) {
//   var tmp = null;
//   if (target < 0) return;
//   if (target === 0) return res.push(stack);
//   for (var i = index; i < len; i++) {
//     if (candidates[i] > target) break;
//     if (i > index && candidates[i] === candidates[i - 1]) continue;
//     tmp = Array.from(stack);
//     tmp.push(candidates[i]);
//     dfs(res, tmp, i + 1, len, candidates, target - candidates[i]);
//   }
// };

// console.log(combinationSumA([10,1,2,7,6,1,5], 8));
// ------------------------------------------------------

// 40. Combination Sum II
const combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  // dfs helper
  const dfs = function (i, candidates, target, slate) {
    // backtracking case
    if (target < 0) return;

    //base case
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    for (let j = i; j < candidates.length; j++) {
      if (i < j && (candidates[j] === candidates[j - 1])) continue;
      slate.push(candidates[j]);
      dfs(j + 1, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
}

// time O(2^n * n), space O(2^n * n);
// console.log(combinationSum2([10,1,2,7,6,1,5],8))

// --------------------------------- 
// 46. Permutations
const permute = function (nums) {
  const result = [];
  const dfs = function (i, nums) {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    for (let j = i; j < nums.length; j++) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};
// var permute = function (nums) {
//   var res = [];
//   dfs(res, [], nums);
//   return res;
// };

// var dfs = function (res, arr, nums) {
//   var len = nums.length;
//   if (!len) return res.push(arr);
//   for (var i = 0; i < nums.length; i++) {
//     let tmp1 = Array.from(arr);
//     console.log(tmp1, "first")
//     tmp1.push(nums[i]);
//     console.log(tmp1, "second")
//     let tmp2 = Array.from(nums);
//     tmp2.splice(i, 1);
//     dfs(res, tmp1, tmp2);
//   }
// };

// console.log(permute([1, 1, 3]));

// ------------------------------------------------------

// 47. Permutations II
const permuteUnique = function (nums) {
  const result = [];
  const dfs = function (i, nums) {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }
    const hash = {};
    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) continue;
      hash[nums[j]] = true;
      [nums[j], nums[i]] = [nums[i], nums[j]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};

// var dfs = function (res, arr, nums) {
//   var len = nums.length;
//   var tmp1 = null;
//   var tmp2 = null;

//   if (!len) return res.push(arr);
//   for (var i = 0; i < len; i++) {
//     if (nums[i] === nums[i - 1]) continue;

//     tmp1 = Array.from(arr);
//     tmp1.push(nums[i]);

//     tmp2 = Array.from(nums);
//     tmp2.splice(i, 1);

//     dfs(res, tmp1, tmp2);
//   }
// };
// var permuteUnique = function (nums) {
//   var res = [];
//   nums.sort((a, b) => a - b);
//   dfs(res, [], nums);
//   return res;
// };

// console.log(permuteUnique([1, 1, 2]));
// ---------------------------------------------------------

// 48. Rotate Image
var swap = function (matrix, x1, y1, x2, y2) {
  var tmp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = tmp;
};

var rotate = function (matrix) {
  var n = matrix.length;
  var n2 = Math.floor(n / 2);
  // 1 2 3     7 8 9
  // 4 5 6  => 4 5 6
  // 7 8 9     1 2 3
  for (var i = 0; i < n2; i++) {
    for (var j = 0; j < n; j++) {
      swap(matrix, i, j, n - 1 - i, j);
    }
  }

  // 7 8 9     7 4 1
  // 4 5 6  => 8 5 2
  // 1 2 3     9 6 3
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      swap(matrix, i, j, j, i);
    }
  }
  return matrix;
};

// console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))

// ---------------------------------------------------------

// 49. Group Anagrams
let groupAnagrams = function (strs) {
  let res = {};
  let str = "";
  for (let i = 0; i < strs.length; i++) {
    str = Array.from(strs[i]).sort().join("");
    if (!res[str]) {
      res[str] = [];
    }
    res[str].push(strs[i]);
  }
  return Object.values(res);
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// ---------------------------------------------------------

// 50. Pow(x, n)
const pow = function (x, n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product = product * x;
  }
  return product;
};

let myPow = function (x, n) {
  if (n === 0) return 1;
  if (n > 0) return pow(x, n);
  if (n < 0) return 1 / pow(x, -n);
};

// // Alternatively
// let myPow = function(x, n) {
//   if (n === 0) return 1;
//   if (n > 0) return pow(x, n);
//   if (n < 0) return 1 / pow(x, -n);
// };

// const pow = function (x, n) {
//   if (n === 1) return x;
//   let num = pow(x, Math.floor(n / 2));
//   if (n % 2 === 0) {
//     return num * num;
//   } else {
//     return x * num * num;
//   }
// };
// console.log(myPow(2, -2));
// ---------------------------------------------------------

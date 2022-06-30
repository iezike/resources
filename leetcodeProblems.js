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

// 27. Remove Element
const removeElement = function (nums, val) {
  if (!nums) return 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--
    }
  }
  return nums.length;
};

// console.log(removeElement([0,1,2,2,3,0,4,2],2))
// ---------------------------------------------------------

// 33. Search in Rotated Sorted Array
const search = function(nums, target) {
    let l = 0;
    let r = nums.length -1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2)
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
          r = m -1;
        }
      }
    }
    return -1;
};
  // console.log(search([4,5,6,7,0,1,2], 3))
// ---------------------------------------------------------
// 47. Permutations II
var dfs = function (res, arr, nums) {
  var len = nums.length;
  var tmp1 = null;
  var tmp2 = null;

  if (!len) return res.push(arr);

  for (var i = 0; i < len; i++) {
    if (nums[i] === nums[i - 1]) continue;

    tmp1 = Array.from(arr);
    tmp1.push(nums[i]);

    tmp2 = Array.from(nums);
    tmp2.splice(i, 1);

    dfs(res, tmp1, tmp2);
  }
};

var permuteUnique = function (nums) {
  var res = [];
  nums.sort((a, b) => a - b);
  dfs(res, [], nums);
  return res;
};
// console.log(permuteUnique([1,1,2]))
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

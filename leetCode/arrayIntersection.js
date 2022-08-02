// 349. Intersection of Two Arrays
const arrayIntersection = function (nums1, nums2) {
  const hash = {};
  const result = [];
  for (let num of nums1) {
    if (!hash[num]) {
      hash[num] = 1;
    }
  }
  for (let num of nums2) {
    if (hash[num] > 0) {
      result.push(num);
    }
    hash[num]--;
  }
  return result;
};

// Driver code
(nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
console.log(arrayIntersection(nums1, nums2));

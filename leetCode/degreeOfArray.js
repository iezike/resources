//  697. Degree of an Array
const findShortestSubArray = function (nums) {
  let hash = {};
  let maxFreq = 0;
  for (let num of nums) {
    if (hash[num] === undefined) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
    if (hash[num] > maxFreq) {
      maxFreq = hash[num];
    }
  }
  return maxFreq;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));

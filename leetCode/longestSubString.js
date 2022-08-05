function longestSubString(str) {
  let i = 0;
  let j = i + 1;
  let count = 1;
  let maxCount = 1;
  while (i < j && j < str.length) {
    if (str[i] !== str[j]) {
      count++;
      j++;
    } else {
      i = j;
      j++;
      count = 0;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

console.log(longestSubString("hehloa"))
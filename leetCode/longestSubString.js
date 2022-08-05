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


// Alternatively
var lengthOfLongestSubstring = function(s) {
  let seenChars = {};
    let maxLen = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
      let lastChar = s[end];
      if (lastChar in seenChars) {
        start = Math.max(start, seenChars[lastChar] + 1);
      }
      seenChars[lastChar] = end;
      maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
  };
  
console.log(longestSubString("hehloa"))
function lenghtOfLongestStr(s) {
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
}

console.log(lenghtOfLongestStr("abcdabcbbjklmo"));

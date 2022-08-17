// 125. Valid Palindrome
const isPalindrome = function (s) {
  const str = s.replace(/[\W|_]/g, "").toLowerCase();
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

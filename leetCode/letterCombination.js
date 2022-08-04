// d = {1: '', 2: 'abc',3: 'def',4: 'ghi',5: 'jkl',6: 'mno',7: 'pqrs',8: 'tuv',9: 'wxyz'}

// 17. Letter Combinations of a Phone Number

function letterCombination(digits) {
  if (digits.length === 0) return [];
  const d = {
    // "1": "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let result = [];
  function backtracking(i, curStr) {
    if (i === digits.length) {
      result.push(curStr.join(""));
      return;
    }
    for (let char of d[digits[i]]) {
      curStr.push(char);
      backtracking(i + 1, curStr);
      curStr.pop();
    }
  }

  backtracking(0, []);
  return result;
}

// Driver Code
const input = "23";
console.log(letterCombination(input));

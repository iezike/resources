// 20. Valid Parentheses
var isValid = function (s) {
  const braket = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  };
  let heep = [];
  for (let char of s) {
    if (braket[char]) {
      heep.push(braket[char]);
    } else {
      if (heep.pop() !== char) return false;
    }
  }
  return !heep.length;
};

const input = "<>{}[]()";

console.log(isValid(input));

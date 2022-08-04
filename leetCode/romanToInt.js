// 13. Roman to Integer

function romanToInt(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let i = 0;
  let num = 0;
  while (i < s.length) {
    let c = s[i];
    let next = s[i + 1];
    if (symbols[c + next]) {
      num += symbols[c + next];
      i += 2;
    } else {
      num += symbols[c];
      i++;
    }
  }
  return num;
}

const input = "LVIII";
console.log(romanToInt(input));

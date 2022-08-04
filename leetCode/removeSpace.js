// Given a string, remove all spaces from the string and return it.

function removeSpaces(str) {
  return str.split(" ").join("");
}

// // Driver code
var str = "g eeks for ge eeks ";
// console.log(removeSpaces(str));

function removeExtraSpaces(str) {
  let result = "";
  let preChar = " ";
  for (let i = 0; i < str.length; i++) {
    curentChar = str[i];
    if ((curentChar !== " ")) {
      result += curentChar;
    } else if ((preChar !== " ") && curentChar === " " ) {
      result += curentChar;
    } 
    preChar = curentChar;
  }

  return result;
}


// Driver Code
const str1 = "Hello     Geeks .   Welcome   to  GeeksforGeeks.    ";;
console.log(removeExtraSpaces(str1));

// Given a string, remove all spaces from the string and return it.

function removeSpaces(str) {
  return str.split(" ").join("");
}

// // Driver code
var str = "g eeks for ge eeks ";
console.log(removeSpaces(str));

function MathChallenge(num) {
  const pascalTriangle = [];
  let coefficients = [];
  for (let i = 0; i < num + 1; i++) {
    coefficients = [1];
    for (let j = 1; j < i; j++) {
      coefficients.push(
        pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]
      );
    }
    if (i > 0) coefficients.push(1);
    pascalTriangle.push(coefficients);
  }
  return coefficients;
}

console.log(MathChallenge(3));

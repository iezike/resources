function fibonacci(n) {
  const memo = [];
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fibonacci(n-1) + fibonacci(n-2)
  memo[n]  = result;
  return result;
}

console.log(fibonacci(7));
function fibonacci(n) {
  if (n === 1 || n === 0) return 1;
  const arry = [1,1]
  for (i = 2; i < n; i++) {
    
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


// Alternatively
function fib(n) {
  const result = [0,1];
  for (i = 2; i <= n; i++) {
    result[i] = result[i-1] + result[i-2];
  }
  return result[n];
}
console.log(fibonacci(4))

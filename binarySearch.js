function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    const mid = arr[midIndex];
    if (mid === val) {
      return midIndex;
    } else if (mid > val) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
}
console.log(binarySearch([-1, 2, 8, 9, 11], 2));

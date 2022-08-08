function pivot(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let swapIndex = 0;
  let pivot = arr[swapIndex];
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swap(arr, swapIndex, i);
      swapIndex = i;
    }
    pivot = arr[i];
  }
  return arr;
}

console.log(pivot([1, 3, 5, 4]));

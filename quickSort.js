function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // console.log(swap(arr, 1, 3))
  let pivot = arr[start];
  let swapIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swap(arr, swapIndex, i);
      swapIndex = i;
      pivot = arr[swapIndex]
    }
    pivot = arr[i]
  }
  return arr
}

console.log(pivot([1,3,5,4]))
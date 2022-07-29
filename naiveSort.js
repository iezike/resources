// Sort in Increasing Order
function naiveSortASC(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

const swapIndex = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Sort in Decendening Order
function naiveSortDESC(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] > arr[j - 1]) {
        swapIndex(arr, j, j - 1);
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

console.log(naiveSortASC([9, 7, 3, 4, -2]));

function selectionSort(arr) {
  const swap = (arr, i, j) => {[arr[i], arr[j]] = [arr[j], arr[i]]};
  for(let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestIndex]) {
        lowestIndex = j;
      }
    }
    if (lowestIndex !== i) {
      swap(arr, i, lowestIndex);
    }
  }
  return arr;
}

console.log(selectionSort([1, -2, 3, 8, 20, -4, 9]));
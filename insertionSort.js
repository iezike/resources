function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let lastindex = 0;
    for (let j = i - 1; j >= 0; j--) {
      console.log(j, i, currentVal, arr[j])
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      }
    }
    arr[lastindex] = currentVal;
  }
  return arr;
}
                                //  i = 2
console.log(insertionSort([2, 1, 9, 76, 4])); // currentVal = 9
                              // j = 1 
                              
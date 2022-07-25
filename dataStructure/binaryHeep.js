class MaxBinaryHeep {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(elem) {
    this.values.push(elem);
    this.pubbleUp();
    // console.log(this.values[this.values.length - 1]);
  }

  pubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  pubbleDown() {
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extraMax() {
    const maxVal = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values.pop();
      this.pubbleDown();
    }
    return maxVal;
  }
}



let heep = new MaxBinaryHeep();
heep.insert(55);
console.log(heep.values);
heep.extraMax();
console.log(heep.values);

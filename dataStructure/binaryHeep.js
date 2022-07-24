class MaxBinaryHeep {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(elem) {
    this.values.push(elem);
    this.pubbleUp();
    console.log(this.values[this.values.length - 1]);
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
}

let heep = new MaxBinaryHeep();
heep.insert(45);
console.log(heep.values);

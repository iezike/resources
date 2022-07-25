// Implementing a Max Priority Queue.
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.pubbleUp();
  }

  pubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const maxVal = this.values[0];
    if (this.values.length > 0) {
      this.values[0] = this.values[this.values.length - 1];
      this.values.pop();
      this.pubbleDown();
    }
    return maxVal;
  }
  pubbleDown() {
    let idx = 0;
    const len = this.values.length;
    let curNode = this.values[0];
    let leftChild, rightChild;
    let swap = null;
    while (swap) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIx = 2 * idx + 2;
      if (leftChildIdx < len) {
        let leftChild = thi.values[leftChildIdx];
        if (leftChild.priority > curNode.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChild < len) {
        let rightChild = this.values[rightChildIx];
        if (
          (swap === null && rightChild.priority > curNode.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = curNode;
      idx = swap;
    }
  }
}

// ---------- Driver Code   ----------
// let ER = new PriorityQueue();
// ER.enqueue("common cold", 1);
// ER.enqueue("gun shot", 5);
// ER.enqueue("high fever", 2);
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.values);

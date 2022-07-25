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

  enqueue() {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.pubbleUp();
  }


}

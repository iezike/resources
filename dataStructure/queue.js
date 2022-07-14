class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current.value;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));


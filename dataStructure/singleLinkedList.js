class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singleLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(n) {
    if (n < 0 || n >= this.length) return null;
    let count = 0;
    let currentNode = this.head;
    while (count !== n) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
}

const newlinkedlist = new singleLinkedList();
newlinkedlist.push(2);
newlinkedlist.push(10);
newlinkedlist.push(30);
newlinkedlist.unshift(19);
// console.log(newlinkedlist);
console.log(newlinkedlist.get(0));

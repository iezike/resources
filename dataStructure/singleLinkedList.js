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
      // this.next = null
    }
    this.length++;
    return this;
  }
}

const newlinkedlist = new singleLinkedList();
newlinkedlist.push(2)
newlinkedlist.push(4)
newlinkedlist.push(8)
newlinkedlist.push(10)
console.log(newlinkedlist)
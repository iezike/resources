class Linkedlist {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  delete(value) {
    if(!this.head) {
      return;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let curNode = this.head;
    while(curNode.next) {
      if(curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  preppend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if(!this.tail) {
      this.tail = newNode;
    }
  }

  toArray() {
    const element = [];
    let curNode = this.head;
    while (curNode) {
      element.push(curNode);
      curNode = curNode.next;
    }
    return element;
  }
}

const Linkedlist1 = new Linkedlist();
Linkedlist1.append("Ikenna");
Linkedlist1.append("John");
Linkedlist1.append("Cynthia");
Linkedlist1.append("Ikenna");
Linkedlist1.append("David");
Linkedlist1.append("Ikenna");
console.log(Linkedlist1.toArray()); 
Linkedlist1.delete("Ikenna");
console.log(Linkedlist1.toArray()); 

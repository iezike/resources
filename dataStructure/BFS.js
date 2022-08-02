class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return undefined;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  BFS() {
    const data = [],
      queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  rightSideView() {
    const data = [],
      queue = [this.root];
    while (queue.length) {
      let len = queue.length;
      data.push(queue[len - 1].value);
      while (len--) {
        let node = queue.shift();
        if (node.left && node.left.value !== null) queue.push(node.left);
        if (node.right && node.right.value !== null) queue.push(node.right);
      }
    }
    return data;
  }

  leftSideView() {
    const data = [],
      queue = [this.root];
    while (queue.length) {
      let len = queue.length;
      data.push(queue[0].value);
      while (len--) {
        let node = queue.shift();
        if (node.left && node.left.value !== null) queue.push(node.left);
        if (node.right && node.right.value !== null) queue.push(node.right);
      }
    }
    return data;
  }

  find(value) {
    if (!this.root) return undefined;
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (current.value === value) {
        return true;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return undefined;
  }
}

// Drive Code
const tree = new BinarySearchTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.right = new Node(5);
tree.root.left.left = new Node(null);
tree.root.right.right = new Node(4);
tree.root.right.right.left = new Node(6);
tree.root.right.left = new Node(null);
// console.log(tree.BFS());
// console.log(tree.rightSideView());
// console.log(tree.leftSideView());
console.log(tree.find(4));

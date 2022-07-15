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
  DFSpreOrder() {
    let result = [];
    function tranverse(node) {
      if (node.left) {
        tranverse(node.left);
      }
      if (node.right) {
        tranverse(node.right);
      }
      result.push(node.value);
    }
    tranverse(this.root);
    return result;
  }
  DFSpostOrder() {
    let result = [];
    function tranverse(node) {
      if (node.left) tranverse(node.left);
      if (node.right) tranverse(node.right);
      result.push(node.value);
    }
    tranverse(this.root);
    return result;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
tree.insert(20);
console.log(tree.DFSpostOrder());
// console.log(tree.BFS());

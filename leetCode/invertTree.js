// 226. Invert Binary Tree
const invertTree = function (root) {
  if (root) {
    invertTree(root.left);
    invertTree(root.right);
    let tmp = root.right;
    root.right = root.left;
    root.left = tmp;
  }
  return root;
};

// Iteratively
// const invertTree = function(root) {
//     if (!root) return root;
//     let queue = [root];
//     while(queue.length) {
//         let curNode = queue.shift();
//         let tmp = curNode.right;
//         curNode.right = curNode.left;
//         curNode.left = tmp;
//         if (curNode.left) queue.push(curNode.left);
//         if (curNode.right) queue.push(curNode.right);
//     }
//     return root;
// };

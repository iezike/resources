// 94. Binary Tree Inorder Traversal
const inorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  function tranverse(node) {
    if (node.left) tranverse(node.left);
    result.push(node.val);
    if (node.right) tranverse(node.right);
  }
  tranverse(root);
  return result;
};

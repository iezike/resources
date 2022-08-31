// 144. Binary Tree Preorder Traversal
const preorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  function tranverse(node) {
    result.push(node.val);
    if (node.left) tranverse(node.left);
    if (node.right) tranverse(node.right);
  }
  tranverse(root);
  return result;
};
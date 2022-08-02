// 285. Inorder Successor in BST
const inorderSuccessor = function(root, p) {
    if (p.right) {
      let cur = p.right;
      let prev = null;
      while(cur) {
        prev = cur
        cur = cur.left;
      }
      return prev;
    }
    let cur = root
    let prev = null;
    while(cur !== p) {
      if (p.val < cur.val) {
        prev = cur;
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return prev;
};
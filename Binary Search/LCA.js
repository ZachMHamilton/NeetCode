var lowestCommonAncestor = function(root, p, q) {
  while (root) {
      // if root val is less than p and q val
      if (root.val < p.val && root.val < q.val) {
          // search right
          root = root.right;
      } else if (root.val > p.val && root.val > q.val) {
          // search left
          root = root.left;
      } else {
          // break
          break;
      }
  }
  // return the root?
  return root;
};
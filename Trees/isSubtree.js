var isSubtree = function(root, subRoot) {
  var isSameTree = function(p, q) {
  // if we run out of nodes on BOTH, return true
  if (!p && !q) return true;
  // if we run out of nodes on ONLY ONE, or they dont match, return false
  if (!p || !q || p.val !== q.val) return false;

  // recursively call with both subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  };

  var dfs = (node) => {
      // if no more nodes, return false
      if (!node) return false;
      // if helper function returns true, they are the same, return true
      if (isSameTree(node, subRoot)) return true;
      // recursively call dfs with both subtrees
      return dfs(node.left) || dfs(node.right);
  }
  // initiate functions by calling dfs with root
  return dfs(root)
};
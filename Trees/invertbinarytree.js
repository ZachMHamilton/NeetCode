var invertTree = function(root) {
  if (!root) return null;
  const leftSubtree = root.left;
  const rightSubtree = root.right;
  root.left = invertTree(rightSubtree);
  root.right = invertTree(leftSubtree);
  return root;
};
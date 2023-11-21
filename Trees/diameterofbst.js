var diameterOfBinaryTree = function(root) {
  let max = 0;
  // find height of left
  function height (root) {
      if (!root) return 0;
      const left = height(root.left);
      const right = height(root.right);
      max = Math.max(max, left + right);
      return Math.max(left, right) + 1;
  }

  height(root);

  return max;
};
var isSymmetric = function(root) {
  // if root is null, then its a mirror
  if (root == null) return true;
  // call helper with left and right subtrees
  return symmetryChecker(root.left, root.right)
};

var symmetryChecker = function(left, right) {
  // if we get to end of both subtrees and no more nodes are left, it is symmetrical
  if (left == null && right == null) return true;
  // if we have extra nodes on either side, not symmetrical
  if (left == null || right == null) return false;
  // if vals arent the same, not symmetrical
  if (left.val !== right.val) return false;

  // recursively call with corresponding mirrored nodes
  return symmetryChecker(left.left, right.right) && symmetryChecker(left.right, right.left)
}
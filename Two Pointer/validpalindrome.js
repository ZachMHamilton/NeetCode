var isPalindrome = function(s) {
  // turn s to lowercase
  var newString = s.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  // if length is <= 1 true
  if (newString.length <= 1) return true;
  // if 1st and last dont match false
  if (newString[0] !== newString[newString.length - 1]) return false;
  // return slices
  return isPalindrome(newString.slice(1, newString.length - 1))
};
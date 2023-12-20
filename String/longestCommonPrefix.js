var longestCommonPrefix = function(strs) {
  // if we sort the strs alphabetically, all we have to check is the first    and last string bc if they start with diff letters, then there is no common prefix
  // sort strs
  strs.sort();
  // iterate over chars
  for (let i = 0; i < strs[0].length; i++) {
      // check if chars dont match
      if (strs[0][i] !== strs[strs.length - 1][i]) {
          // return the substring without including that car
          return strs[0].substring(0, i)
      }
  }
  // if we get here, the entire string IS the substring, return it
  return strs[0];
};
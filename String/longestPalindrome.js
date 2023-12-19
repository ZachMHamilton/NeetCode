var longestPalindrome = function(s) {
  // use obj to store frequencies
  const obj = {};
  // var to store count
  let count = 0;
  // iterate thru list
  for (let i = 0; i < s.length; i++) {
      let current = s[i]
      // update frequency by 1 if found in obj
      if (obj[current]) {
          obj[current] = obj[current] + 1
      }
      // otherwise, add to object with freq of 1
      else {
          obj[current] = 1;
      }
      // check if keys val is even, add two to count
      if (obj[current] % 2 === 0) {
          count += 2;
      }
  }
  // if s length is > than count, we return count + 1, to account for the     single char, otherwise, return count
  return s.length > count ? count + 1 : count;
};

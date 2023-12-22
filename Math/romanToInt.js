var romanToInt = function(s) {
  // var to store final val
  let output = 0;
  // create obj to store each numeral with its value
  const vals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }
  // iterate thru the string
  for (let i = 0; i < s.length; i++) {
      let current = s[i];
      let next = s[i + 1];
      // if the current numeral is < the next, subtract from final val
      if (vals[current] < vals[next]) {
          output -= vals[current];
      } else {
      // else, add to final val
          output += vals[current]
      }
  }
  // return final val
  return output;
};
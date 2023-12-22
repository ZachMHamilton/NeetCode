var maxScore = function(s) {
  // vars to store max, num of zeros on left, num of ones on the right
  let max = 0;
  let countZerosLeft = 0;
  let countOnesRight = s.split('1').length - 1;

  // Iterating through the string
  for (let i = 0; i < s.length - 1; i++) {
      // Increment countZerosLeft if the current character is '0'
      countZerosLeft += s[i] === '0' ? 1 : 0;
      
      // Decrement countOnesRight if the current character is '1'
      countOnesRight -= s[i] === '1' ? 1 : 0;
      
      // Update max with the maximum value between max, countZerosLeft + countOnesRight
      max = Math.max(max, countZerosLeft + countOnesRight);
  }

  // Return the final maximum score
  return max;
};
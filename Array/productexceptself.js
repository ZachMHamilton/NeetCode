var productExceptSelf = function(nums) {
  // two pointers
  // array to store output
  const output = [];
  // iterate thru nums
  for(let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
          if (j === i) continue;
          product = product * nums[j]
      }
      output.push(product);
  }
  // return array
  return output;
};
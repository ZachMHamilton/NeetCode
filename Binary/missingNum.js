var missingNumber = function(nums) {
  // Gaussian Summation
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
      actualSum += nums[i];
  }
  
  return expectedSum - actualSum;
  // naive
  // let valid = {}
  // let max = 0;
  // for(const num of nums) {
  //     if (num > max) {
  //         max = num;
  //     }
  //     valid[num] = true;
  // }
  // for (let i = 0; i <= max; i++) {
  //     if (valid[i] === undefined) {
  //         return i;
  //     }
  // }
  // return max + 1;

};
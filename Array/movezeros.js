var moveZeroes = function(nums) {
  // pointer
  let pointer = 0;
  // iterate over nums
  for (let i = 0; i < nums.length; i++) {
      // if we hit a 0, swap it with ele at i + 1
      if (nums[i] !== 0) {
          [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
          pointer++;
      }
  }
  // return nums
  return nums;
};
var threeSum = function(nums) {
  const output = [];
  // sort array
  nums.sort((a, b) => a - b);
  // iterate thru
  for (let i = 0; i < nums.length; i++) {
      // check for duplicates
      if (i > 0 && nums[i] === nums[i - 1]) continue
      // create target
      const target = 0 - nums[i];
      // create pointers
      let left = i + 1;
      let right = nums.length - 1;
      while (right > left) {
          // calc sum
          const sum = nums[left] + nums[right]
          if (sum > target) {
              right--;
          } else if (sum < target) {
              left++;
          } else {
              output.push([nums[i], nums[left], nums[right]]);
              // skip dupes
              while (nums[left] === nums[left + 1]) left++;
              while (nums[right] === nums[right - 1]) right++;
              left++;
              right--;
          }
      }

  }
  return output;
};
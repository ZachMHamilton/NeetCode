var search = function(nums, target) {
  // input: array of numbers
  // output: index of target or -1
  // find the middle of the array
  const mid = Math.floor(nums.length / 2);
  // if length of array is 0 then return -1
  if (nums.length === 0) {
      return -1;
  }
  // if the element at the middle is the target
  if (nums[mid] === target) {
      // return the middle
      return mid;
  }
  // check if the element at the middle is greater than or less than the target
  if (nums[mid] < target) {
      // if less than target
          // search the right half of the array recursively
      return search(nums.slice(mid + 1), target);
  } else {
      // if greater than target
          // search the left half
      return search(nums.slice(0, mid), target);
  }
};
var maxArea = function(height) {
  // store max
  let max = 0;
  // iterate over the heights
  let left = 0;
  let right = height.length - 1;
  while (right > left) {
      let sum;
      if (height[left] < height[right]) {
          sum = height[left] * (right - left);
          left++;
      } else {
          sum = height[right] * (right - left);
          right--;
      }
      if (sum > max) {
          max = sum;
      }
  }
  return max;
};
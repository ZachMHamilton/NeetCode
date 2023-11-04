var longestConsecutive = function (nums) {
  // sort the array in ascending order
  const sorted = nums.sort((a, b) => a - b);
  // variable to store count
  let output = 0;
  let count = 1;
  console.log(sorted);
  // iterate thru the sorted array
  for (let i = 0; i < sorted.length; i++) {
    // check if the next element is 1 above the current element
    if (sorted[i + 1] === sorted[i] + 1) {
      // increase count by 1
      count++;
    } else if (sorted[i + 1] === sorted[i]) {
      continue;
    } else {
      // otherwise
      if (count > output) {
        output = count;
      }
      count = 1;
    }
  }
  // return the count
  return output;
};

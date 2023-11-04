var topKFrequent = function(nums, k) {
  const obj = {};
  
  for (let i = 0; i < nums.length; i++) {
      let current = nums[i]
      if (obj[current] !== undefined) {
          obj[current] += 1;
      } else {
          obj[current] = 1;
      }
  }
  const sorted = Object.keys(obj).sort((a,b) => obj[b] - obj[a]);
  return sorted.slice(0, k);
};
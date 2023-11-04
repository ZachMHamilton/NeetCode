var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (obj[compliment] !== undefined) {
      return [obj[compliment], i];
    }
    obj[nums[i]] = i;
  }
  return false;
};

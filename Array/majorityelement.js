var majorityElement = function(nums) {
  let obj = {}
  for (const num of nums) {
      if (obj[num]) {
      obj[num] += 1;
      } else {
          obj[num] = 1;
      }
  }
  console.log(obj)
  let most = 0;
  let maj = 0;
  for (const num in obj) {
      if (obj[num] > most) {
          most = obj[num];
          maj = num;
      }
  }
  return maj;
};
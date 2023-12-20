var buyChoco = function(prices, money) {
  // naive
  // var for min
  let min = Infinity;
  // iterate using double for loop
  for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          const cost = prices[i] + prices[j];
          // check if difference is greater than current min and greater than or equal to zero
          if (cost < min) {
              min = cost;
          }
      }
  }
  // return min or money
  return min <= money ? money - min : money;
};
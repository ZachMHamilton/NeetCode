var evalRPN = function(tokens) {
  const stack = [];
  let ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
  // iterate thru tokens
  for (let i = 0; i < tokens.length; i++) {
      if (ops[tokens[i]]) {
          const secondNum = stack.pop();
          const firstNum = stack.pop();
          const result = ops[tokens[i]](firstNum, secondNum);
          stack.push(result);
      } else {
          stack.push(Number(tokens[i]))
      }
  }   
  console.log(stack)
  // return first ele in stack, which should be evaluated result 
  return stack.pop();
};
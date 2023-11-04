var isValid = function(s) {
  // create stack
  const stack = [];
  // iterate thru s
  for (const char of s) {
      // if opening paren
      if (char === '(' || char === '{' || char === '[') {
          // push to stack
          stack.push(char);
      }
      // if closing paren
      else if (char === ')' || char === '}' || char === ']') {
          // pop off stack and check if its a match
          const pop = stack.pop();
          // if not
          if (char === ')' && pop !== '(') {
              return false
          }
          if (char === '}' && pop !== '{') {
              return false    
          }
          if (char === ']' && pop !== '[') {
              return false
              }
      }
  }
  // check if stack is empty
  return !stack.length;
};
var backspaceCompare = function(s, t) {
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i < s.length || i < t.length; i++) {
      if (s[i] === '#') {
          stack1.pop();
      } else if (s[i]) {
          stack1.push(s[i]);
      }
      if (t[i] === '#') {
          stack2.pop();
      } else if (t[i]) {
          stack2.push(t[i]);
      }
  }

  return stack1.toString() === stack2.toString();
};
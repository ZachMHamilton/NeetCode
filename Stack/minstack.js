var MinStack = function() {
  this.contains = {};
  this.minStack = []
  this.index = 0;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.contains[this.index] = val;
  this.index++;
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const ele = this.contains[this.index - 1];
  delete this.contains[this.index - 1];
  this.index--;
  if (ele === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
  }
  return ele;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.contains[this.index - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
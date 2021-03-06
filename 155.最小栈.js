/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = Infinity;
  return this
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.min = Math.min(this.min, x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(!this.stack.length) return 0;
  let s = this.stack.pop();
  if(this.min === s) {
    this.min = Math.min(...this.stack)
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.slice(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


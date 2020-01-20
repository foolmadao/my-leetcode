/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  const getPow = (x, n) => {
    if(n === 1) return x;
    if(n%2 === 0) {
      const b = getPow(x, n/2)
      return b * b;
    } else {
      const a = Math.floor(n/2)
      const b = getPow(x, a)
      return b * b * x
    }
  }
  if(n === 0) return 1;
  if(n > 0) {
    return getPow(x, n);
  }

  if(n < 0) {
    n = -n;
    return 1/getPow(x, n);
  }
};
// @lc code=end


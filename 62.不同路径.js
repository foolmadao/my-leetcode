/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const catheObj = {};
  const dp = (x, y) => {
    if(x === 1, y === 1) return 1;
    if(catheObj[x+'-'+y]) {
      return catheObj[x+'-'+y]
    } else {
      const top = y > 1 ? dp(x, y-1)  : 0;
      const left = x > 1 ? dp(x-1, y) : 0;
      catheObj[x+'-'+y] = top + left;
      return top + left;
    }
    
  }

  return dp(m,n)
};
// @lc code=end


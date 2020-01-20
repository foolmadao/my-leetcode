/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const catheObj = {};
  const dp = (x, y) => {
    if(obstacleGrid[x-1][y-1] === 1) return 0
    if(x === 1 && y === 1) return 1;
    if(catheObj[x+'-'+y]) {
      return catheObj[x+'-'+y]
    } else {
      const top = y > 1 ? dp(x, y-1)  : 0;
      const left = x > 1 ? dp(x-1, y) : 0;
      catheObj[x+'-'+y] = top + left;
      return top + left;
    }
    
  }

  return dp(obstacleGrid.length,obstacleGrid[0].length)
};
// @lc code=end


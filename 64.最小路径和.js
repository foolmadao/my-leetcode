/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var n = grid.length - 1;
  var m = grid[0].length - 1;

  const cacheObj = {};

  function findMin(n, m) {
    if(cacheObj[`${n}-${m}`]) return cacheObj[`${n}-${m}`];
    if (n === 0) {
      if(m === 0) {
        return grid[0][0]
      } else {
        cacheObj[`${n}-${m}`] = findMin(0, m-1) + grid[0][m];
      }
    } else if(m === 0) {
      cacheObj[`${n}-${m}`] = findMin(n-1, 0) + grid[n][0];
    } else {
      cacheObj[`${n}-${m}`] = Math.min(findMin(n-1, m), findMin(n, m-1)) + grid[n][m];
    }

    return cacheObj[`${n}-${m}`];
  }

  return findMin(n,m);
};


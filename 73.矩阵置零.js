/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const copyMatrix = JSON.parse(JSON.stringify(matrix));

  const changeVal = (i, j) => {
    for (let x = 0; x < matrix.length; x++) {
      matrix[x][j] = 0;  
    }
    matrix[i].fill(0);
  }

  for (let i = 0; i < copyMatrix.length; i++) {
    for (let j = 0; j < copyMatrix[i].length; j++) {
      if (copyMatrix[i][j] === 0) changeVal(i, j);
    }
  }
};
// @lc code=end


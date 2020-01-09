/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let targetArr=[];
  for(let i = 0; i < matrix.length; i++) {
    const itemArr = [];
    for(let j = 0; j < matrix.length; j++) {
      
      itemArr.unshift(matrix[j][i])
    }
    
    targetArr.push(itemArr);
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      matrix[i][j] = targetArr[i][j]
    }
  }
};


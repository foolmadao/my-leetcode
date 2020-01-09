/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix.length) return [];
  let direct = 'right';
  let location = [0,-1]
  let m = matrix.length;
  let n = matrix[0].length;
  const taregtArr = [];
  while(m && n) {
    switch(direct) {
      case 'right':
        for(let i = 1; i <= n; i++){
          taregtArr.push(matrix[location[0]][location[1] + i])
        }
        location = [location[0], location[1] + n]
        direct = 'down';
        m--;
        break;
      case 'down':
        for(let i = 1; i <= m; i++){
          taregtArr.push(matrix[location[0] + i][location[1]])
        }
        location = [location[0] + m, location[1]]
        direct = 'left';
        n--;
        break;
      case 'left':
        for(let i = 1; i <= n; i++){
          taregtArr.push(matrix[location[0]][location[1] - i])
        }
        location = [location[0], location[1] - n]
        direct = 'up';
        m--;
        break;
      case 'up':
        for(let i = 1; i <= m; i++){
          taregtArr.push(matrix[location[0] - i][location[1]])
        }
        location = [location[0] - m, location[1]]
        direct = 'right';
        n--;
        break;
    }
  }

  return taregtArr;

};


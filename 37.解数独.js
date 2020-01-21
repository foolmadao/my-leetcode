/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const isValid = (row, col, num) => {
    for (let i = 0; i < 9; i++) {
      let boxRow = parseInt(row/3);
      let boxCol = parseInt(col/3);
      if(+board[row][i] === num ||
         +board[i][col] === num ||
         +board[boxRow*3 + parseInt(i/3)][boxCol*3 + (i%3)] === num) {
           return false;
         }
    }
    return true
  }

  const solve = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if(board[i][j] === '.') {
          for (let t = 1; t < 10; t++) {
            if (isValid(i, j, t)) {
              board[i][j] = String(t);
              if(solve()) {
                return true
              }
              board[i][j] = '.'
            }
            
          }
          return false;
        }
      }
    }
    return true
  }

  solve();

  return board
};


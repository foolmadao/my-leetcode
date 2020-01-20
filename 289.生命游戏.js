/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const copyBoard = JSON.parse(JSON.stringify(board));

  const dealAlive = (i, j) => {
    let count = -1;
    for (let k = i-1; k < i+2; k++) {
      for (let x = j-1; x < j+2; x++) {
        if(copyBoard[k] && copyBoard[k][x] === 1) count++;
      }
    }

    if(count < 2 || count > 3) {
      board[i][j] = 0;
    }
  }

  const dealDead = (i, j) => {
    let count = 0;
    for (let k = i-1; k < i+2; k++) {
      for (let x = j-1; x < j+2; x++) {
        if(copyBoard[k] && copyBoard[k][x] === 1) count++;
      }
    }

    if(count === 3) {
      board[i][j] = 1;
    }
  }

  for (let i = 0; i < copyBoard.length; i++) {
    for (let j = 0; j < copyBoard[i].length; j++) {
      if(copyBoard[i][j] === 1) {
        dealAlive(i, j)
      } else {
        dealDead(i, j)
      }
      
    }
  }
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;

  const searchIsland = (x, y) => {
    grid[x][y] = '0';
    if(grid[x+1] && grid[x+1][y] === '1') searchIsland(x+1, y);
    if(grid[x-1] && grid[x-1][y] === '1') searchIsland(x-1, y);
    if(grid[x][y+1] === '1') searchIsland(x, y+1);
    if(grid[x][y-1] === '1') searchIsland(x, y-1);
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if(grid[x][y] === '1') {
        count ++;
        searchIsland(x, y);
      } 
    }
  }

  return count

};
// @lc code=end


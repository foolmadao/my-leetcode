/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let max = Math.floor(c ** 0.5);
  let min = 0;

  while (min <= max) {
    let res = min ** 2 + max ** 2;
    if(res === c) {
      return true;
    } else if (res > c) {
      max --
    } else {
      min ++
    }
  }
  return false
};
// @lc code=end


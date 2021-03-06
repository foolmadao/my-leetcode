/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let cur = 0;

  for (let index = 0; index < nums.length; index++) {
    if(nums[index] === 1) {
      cur ++;
      if(cur > max) max = cur;
    } else {
      cur = 0;
    }
  }

  return max
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  const robList = [];
  robList[0] = nums[0];
  robList[1] = Math.max(nums[0], nums[1]);

  for(let i=2; i<len; i++) {
    robList[i] = Math.max(robList[i-2]+nums[i], robList[i-1])
  }

  return Math.max(robList[len-2], robList[len-1])
};
// @lc code=end


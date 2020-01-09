/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    len = nums.length;
    for (let index = 0; index < len; index++) {
      if(nums[index] === val) {
        nums.splice(index,1);
        index--
      }
    }
    return nums.length
};
// @lc code=end


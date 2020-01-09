/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let index = 0; index < nums.length; index++) {
      if(nums.lastIndexOf(nums[index]) === nums.indexOf(nums[index])) {
        return nums[index]
      }
    }
};


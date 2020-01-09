/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const zorroArr = []
  while(true) {
    const index = nums.findIndex(n => n === 0);
    if(index !== -1) {
      nums.splice(index, 1);
      zorroArr.push(0);
    } else {
      break;
    }
  }

  nums.push(...zorroArr)
};


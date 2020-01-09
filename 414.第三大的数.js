/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = nums.sort((a,b) => b - a);
    let sortNum = 1;
    const maxNum = nums[0];
    let target = nums.shift();
    while(sortNum !== 3 && nums.length) {
      const num = nums.shift();
      if(num === target) continue;
      if(num < target) {
        sortNum++;
        target = num;
      }
    }
    return sortNum ===3 ? target : maxNum;
};


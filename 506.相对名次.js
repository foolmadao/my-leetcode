/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  const target = [...nums].sort((a,b) => b-a);
  return nums.map(t => {
    if(t === target[0]) return 'Gold Medal';
    if(t === target[1]) return 'Silver Medal';
    if(t === target[2]) return 'Bronze Medal';
    return target.findIndex(item => item === t) + 1 + '';
  })
};
// @lc code=end


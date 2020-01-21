/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let n = nums.length;
  nums = nums.sort((a,b) => a-b);
  let start = 1;
  let res = [[]];
  for(let i = 0;i < nums.length;i++){
      let len = res.length;
      let resTmp = [];
      for(let j = 0;j < len;j++){
          if(i > 0  && j < start && nums[i-1] == nums[i]) continue;
          resTmp.push(res[j].concat([nums[i]]));
      }
      start = res.length;
      res.push(...resTmp);
  }
  return res;
};
// @lc code=end


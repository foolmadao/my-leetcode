/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a,b) => a - b);
  if(nums.length < 3) return [];
  
  const numList = [];
  for (let index = 0; index < nums.length-2; index++) {
    const firstNum = nums[index];
    if(index > 0 && firstNum === nums[index - 1]) continue;
    let secIndex = index + 1
    let thirdIndex = nums.length - 1;
    const value = 0 - firstNum;
    while(thirdIndex > secIndex) {
      if(nums[secIndex] + nums[thirdIndex] < value) {
        secIndex ++;
      } else if(nums[secIndex] + nums[thirdIndex] > value) {
        thirdIndex --;
      } else {
        numList.push([nums[index], nums[secIndex], nums[thirdIndex]]);
        while(nums[secIndex] === nums[++secIndex]);
      }
    }
  }
  return numList;
};

